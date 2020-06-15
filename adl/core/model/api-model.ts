import { exists, isFile, mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import { Dictionary } from '@azure-tools/linq';
import { isAnonymous, Path, valueOf } from '@azure-tools/sourcemap';
import { fail } from 'assert';
import { dirname, join } from 'path';
import { EnumDeclaration, IndentationText, InterfaceDeclaration, NewLineKind, Node, Project, QuoteKind, SourceFile, TypeAliasDeclaration } from 'ts-morph';
import { getNode, referenceTo } from '../support/typescript';
import { Attic } from './element';
import { SerializationResult } from './format';
import { HeaderElement } from './http/header';
import { HttpProtocol } from './http/protocol';
import { InternalData } from './internal-data';
import { Metadata } from './metadata';
import { OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from './operation';
import { Alias } from './schema/alias';
import { AliasType, EnumType, InterfaceType, Schemas } from './schema/schemas';
import { Folders, Identity } from './types';
import { VersionInfo } from './version-info';

export function isResource(declaration: InterfaceDeclaration) {
  return false;
}

export function isOperationGroup(declaration: InterfaceDeclaration) {
  // should only have operations
  return false;

}

export function isResult(declaration: InterfaceDeclaration) {
  return false;
}

export function isContentMap(declaration: InterfaceDeclaration) {
  return false;
}

export function isResponse(declaration: InterfaceDeclaration) {
  return false;
}

export function isAliasType(declaration: TypeAliasDeclaration) {
  return false;
}

export function isModelInterface(declaration: InterfaceDeclaration) {
  // model interfaces
  // - may have constructors (used for versioning)
  // - may not have methods 
  if (declaration.getMethods().length > 0) {
    return false;
  }
  // - are not a response, result, operation-group or contentmap
  return !(isOperationGroup(declaration) || isResource(declaration) || isResult(declaration) || isContentMap(declaration) || isResponse(declaration));
}

export class Files {
  readonly api: ApiModel;
  readonly files: Array<SourceFile>;

  protected constructor(api?: ApiModel, sourceFiles?: Array<SourceFile>) {
    this.api = api || (this instanceof ApiModel ? this : fail('requires api model in constructor'));
    this.files = sourceFiles || this.api.files;
  }

  where(predicate: (file: SourceFile) => boolean): Files {
    return new Files(this.api, this.files.filter(predicate));
  }

  get interfaces() {
    return this.files.map(each => each.getInterfaces().filter(isModelInterface)).flat().map(each => new InterfaceType(each));
  }

  get enums() {
    return this.files.map(each => each.getEnums()).flat().map(each => new EnumType(each));
  }

  get typeAliases(): Array<AliasType> {
    return this.files.map(each => each.getTypeAliases().filter(isAliasType)).flat().map(each => new AliasType(each));
  }

  get operationGroups() {
    return this.files.map(each => each.getInterfaces().filter(isOperationGroup)).flat().map(each => new OperationGroup(each));
  }

  get responseCollections(): Array<ResponseCollection> {
    return [];
  }

  get responses(): Array<ResponseElement> {
    return [];
  }

  get results(): Array<ResultElement> {
    return [];
  }

  get parameters(): Array<ParameterElement> {
    return [];
  }

  get headers(): Array<HeaderElement> {
    return [];
  }
}

export class ApiModel extends Files {
  #project: Project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
      newLineKind: NewLineKind.LineFeed,
      quoteKind: QuoteKind.Single,
    },
  });

  counter = 0;

  #folders = <Folders>{
    anonymous: this.#project.createDirectory('anonymous'),
    alias: this.#project.createDirectory('aliases'),
    model: this.#project.createDirectory('models'),
    enum: this.#project.createDirectory('enums'),
    group: this.#project.createDirectory('operations'),
    resource: this.#project.createDirectory('resources'),
  }

  privateData = new Map<string, any>();

  get project() {
    return this.#project;
  }
  getPrivateData(path: Path): Dictionary<any> {
    const p = path.join('/');
    let v = this.privateData.get(p);
    if (!v) {
      this.privateData.set(p, v = {});
    }
    return v;
  }

  internalData: Dictionary<InternalData> = {};

  metaData = new Metadata('');

  // resources = new Array<Resource>();

  schemas = new Schemas(this.api);

  http: HttpProtocol = new HttpProtocol();

  constructor() {
    super();
    (<any>this.#project).api = this;
  }

  versionInfo = new Array<VersionInfo>();

  attic?: Attic;

  addInternalData(key: string, internalData: InternalData): void {
    // ...
  }

  async saveADL(path: string, cleanDirectory = true) {
    // save any open files to memory
    await this.project.save();

    // remove folder if required
    if (await exists(path)) {
      if (await isFile(path)) {
        throw Error('Target path is a file.');
      }
      if (cleanDirectory) {
        await rmdir(path);
      }
    }

    // ensure folder is created 
    await mkdir(path);

    const format = {
      indentSize: 1,
    };
    // print each file and save it.
    return (await Promise.all(
      this.project.getSourceFiles().map(async (each) => {
        if (this.isFileAnonymous(each)) {
          return;
        }
        // disabled: format/organize imports
        // each.formatText(format);
        // each.organizeImports(format);

        const filename = join(path, each.getFilePath());

        const folder = dirname(filename);
        await mkdir(folder);

        await writeFile(filename, each.print().
          //replace(/\*\/\s*\/\*\*\s*/g, '').
          replace(/^(\s*\/\*)/g, '\n$1')
        );
      }))).length;
  }

  getNode(path: Path): Node | undefined {
    return getNode(path, this.project);
  }

  getFile(identity: Identity, type: keyof Folders): SourceFile {
    if (isAnonymous(identity)) {
      identity = identity.name;
      type = 'anonymous';
    }
    const filename = `${(<string>identity).replace(/[^\w]+/g, '_')}.ts`;
    return this.#folders[type].getSourceFile(filename) || this.#folders[type].createSourceFile(filename);
  }

  getEnum(name: string) {
    name = valueOf(name);
    let result: EnumDeclaration | undefined;

    for (const file of this.project.getSourceFiles()) {
      const result = file.getEnum(name);
      if (result) {
        return referenceTo(result);
      }
    }
    return undefined;
  }

  isFileAnonymous(sourceFile: SourceFile): boolean {
    return this.#folders.anonymous.isAncestorOf(sourceFile);
  }

  getNameAndFile(identity: Identity, type: keyof Folders) {
    const name = isAnonymous(identity) ? `${type}_${this.counter++}` : <string><any>valueOf(identity).replace(/[^\w]+/g, '_');
    const file = isAnonymous(identity) ? this.getFile(name, 'anonymous') : this.getFile(name, type);

    return { name, file };
  }


  createInterface(name: string, initializer: Partial<InterfaceType>) {

  }

  createEnum(name: string, initializer: Partial<EnumType>) {
    const file = this.project.createSourceFile(`${this.api.#folders.enum.getPath()}/${name}.ts`);
    // const e = file.addEnum(initializer);
    // there is already a function called create Enum
  }

  createTypeAlias(name: string, initializer: Partial<Alias>) {

  }

  createOperationGroup() {

  }

  createResource() {

  }

  createOperationResultAlias() {

  }


}

export class None {
  async __save(): Promise<SerializationResult> {
    throw 'unimplemented';
  }

  /** 
   * creates a duplicate of this API
   */
  async __clone() {
    throw 'unimplemented';
  }

  /**
   * Removes one or more API versions from the API
   *
   * @remarks When an API version is removed, elements that are marked '@since' will be pushed forward to the next API version, unless they are in the last version, at which point, they would be removed. 
   * 
   * @parameter apiVersions -- removes the definitions from this API.
   */
  async __removeVersions() {
    throw 'unimplemented';
  }

  /** 
   * Adds a new API Version to this API 
   * 
   * @param apiVersion - the api version string to add
   */
  async __addVersion() {
    throw 'unimplemented';
  }
}
