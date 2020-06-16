import { exists, isFile, mkdir, rmdir, writeFile } from '@azure-tools/async-io';
import { Dictionary, items, keys, linq } from '@azure-tools/linq';
import { isAnonymous, Path, valueOf } from '@azure-tools/sourcemap';
import { fail } from 'assert';
import { dirname, join } from 'path';
import { EnumDeclaration, IndentationText, InterfaceDeclaration, NewLineKind, Node, Project, QuoteKind, SourceFile, TypeAliasDeclaration } from 'ts-morph';
import { getTags, hasTag } from '../support/doc-tag';
import { getNode, referenceTo } from '../support/typescript';
import { Attic } from './element';
import { HttpProtocol } from './http/protocol';
import { OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from './operation';
import { InternalData } from './project/internal-data';
import { Metadata } from './project/metadata';
import { Protocol } from './project/protocol';
import { AliasType } from './schema/alias';
import { EnumType } from './schema/enum';
import { ModelType } from './schema/model';
import { Primitives } from './schema/primitive';
import { Folders, Identity } from './types';
import { Declaration } from './typescript/reference';
import { VersionInfo } from './version-info';

export const KnownInterfaceTypes = {
  model: isModelInterface,
  response: isResponseInterfaceType,
  result: isResultInterfaceType,
  operationgroup: isOperationGroupInterfaceType,
  resource: isResourceInterfaceType,
};

export const KnownAliasTypes = {
  model: isModelTypeAlias,
  response: isResponseTypeAlias,
  result: isResultTypeAlias,
  resource: isResourceTypeAlias,
};


export function identifyInterface(declaration: InterfaceDeclaration) {
  // returns a string that identifies that an interface is what it says it is.
  const tagType = [...getTags(declaration, ...keys(KnownInterfaceTypes))];
  switch (tagType.length) {
    case 1:
      // found a single
      return tagType[0].getTagName();
    case 0:
      // no tag types found
      // we're going to have to guess
      for (const [type, check] of items(KnownInterfaceTypes)) {
        if (check(declaration)) {
          return type;
        }
      }
  }
  // it has more than one. That's not ok.
  throw Error(`Inteface Decalaration has muliple type tags: ${declaration.getName()}: ${tagType.map(each => each.getTagName()).join(',')}`);
}

export function identifyTypeAlias(declaration: TypeAliasDeclaration) {
  const tagType = [...getTags(declaration, ...keys(KnownAliasTypes))];
  switch (tagType.length) {
    case 1:
      // found a single
      return tagType[0].getTagName();
    case 0:
      // no tag types found
      // we're going to have to guess
      for (const [type, check] of items(KnownAliasTypes)) {
        if (check(declaration)) {
          return type;
        }
      }
  }
  // it has more than one. That's not ok.
  throw Error(`Inteface Decalaration has muliple type tags: ${declaration.getName()}: ${tagType.map(each => each.getTagName()).join(',')}`);
}

export function isModelTypeAlias(declaration: TypeAliasDeclaration) {
  if (hasTag(declaration, 'model')) {
    return true;
  }

  return false;
}

export function isResponseTypeAlias(declaration: TypeAliasDeclaration) {
  return false;
}

export function isResultTypeAlias(declaration: TypeAliasDeclaration) {
  return false;
}

export function isResourceTypeAlias(declaration: TypeAliasDeclaration) {
  return false;
}


export function isResourceInterfaceType(declaration: InterfaceDeclaration) {
  return false;
}

export function isOperationGroupInterfaceType(declaration: InterfaceDeclaration) {
  // should only have operations
  return false;
}

export function isResultInterfaceType(declaration: InterfaceDeclaration) {
  return false;
}

export function isResponseInterfaceType
  (declaration: InterfaceDeclaration) {
  return false;
}

export function isModelInterface(declaration: InterfaceDeclaration) {
  // interfaces that identify as @model are models
  if (hasTag(declaration, 'model')) {
    return true;
  }
  // inference based on what it looks like it is. 

  // model interfaces should
  // - may have constructors (used for versioning)

  // - may not have methods 
  if (declaration.getMethods().length > 0) {
    return false;
  }

  return true;
}
/*
type Queryable<T extends string,TResult >  = {
  readonly [key in T]: Array<TResult>;
}
const someFiles = <Files><any>{};
const x = someFiles.query<ModelType>('interfaces');
*/


export class Files {
  readonly api: ApiModel;
  readonly files: Array<SourceFile>;

  protected constructor(api?: ApiModel, sourceFiles?: Array<SourceFile>) {
    this.api = api || (this instanceof ApiModel ? this : fail('requires api model in constructor'));
    this.files = sourceFiles || this.api.files;

    // when this gets constructed, we have to emit an event to allow extensions to add queries to the instance
    // we need a query function for the extension
    // and then we can bind it as a property so that others can use it.
    // Object.defineProperty(this, 'AzureResource', {get: ()=>this.interfaces});
  }

  query<T>(propertyName: string): Array<T> {
    return (Object.getOwnPropertyNames(this).indexOf(propertyName) > -1 ? (<any>this)[propertyName] : []);
  }

  where(predicate: (file: SourceFile) => boolean): Files {
    return new Files(this.api, this.files.filter(predicate));
  }

  /**
   * returns all the modelTypes in the API
   */
  get modelTypes() {
    return this.files.map(each => each.getInterfaces().filter(isModelInterface)).flat().map(each => new ModelType(each));
  }

  /**
   * returns all the enumTypes in the API
   */
  get enumTypes() {
    return this.files.map(each => each.getEnums()).flat().map(each => new EnumType(each));
  }

  /**
   * returns all the aliasTypes in the API
   */
  get aliasTypes(): Array<AliasType> {
    return this.files.map(each => each.getTypeAliases().filter(isModelTypeAlias)).flat().map(each => new AliasType(each));
  }

  /**
   * Returns all the operation groups for all protocols
   */
  get operationGroups(): Array<OperationGroup> {
    return linq.values(this.protocols).selectMany(protocol => protocol.operationGroups).toArray();
  }

  /**
   * returns all the protocols for this API 
   */
  get protocols(): Dictionary<Protocol> {
    return linq.items(this.api.protocols).toDictionary(([key]) => key, ([, protocol]) => protocol.from(this.files));
  }

  /**
   * Gets all the globally declared response collections across all the protocols
   */
  get responseCollections(): Array<Declaration<ResponseCollection>> {
    // this.files.map( each => each.getTypeAliases()).filter(isResponseCollection)).flat().map(each => new ResponseCollectionAlias(each))
    return linq.values(this.protocols).selectMany(protocol => protocol.responseCollections).toArray();
  }

  /**
   * Gets all the globally declared responses across all the protocols
   */
  get responses(): Array<Declaration<ResponseElement>> {
    return linq.values(this.protocols).selectMany(protocol => protocol.responses).toArray();
  }

  /**
   * Gets all the globally declared results across all the protocols
   */
  get results(): Array<Declaration<ResultElement>> {
    return linq.values(this.protocols).selectMany(protocol => protocol.results).toArray();
  }

  /**
   * Gets all the globally parameters across all the protocols
   */
  get parameters(): Array<Declaration<ParameterElement>> {
    return linq.values(this.protocols).selectMany(protocol => protocol.parameters).toArray();
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

  protocols = new Dictionary<Protocol>();

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

  primitives = Primitives;

  constructor() {
    super();
    (<any>this.#project).api = this;
    this.protocols.http = new HttpProtocol(this);
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

  createInterface(name: string) {
    // todo
  }

  createEnum(name: string) {
    const file = this.project.createSourceFile(`${this.api.#folders.enum.getPath()}/${name}.ts`);
    // const e = file.addEnum(initializer);
    // there is already a function called create Enum
  }

  createTypeAlias(name: string) {
    // todo
  }

  createOperationGroup() {
    // todo
  }

  createResource() {
    // todo
  }

  createOperationResultAlias() {
    // todo
  }


}
