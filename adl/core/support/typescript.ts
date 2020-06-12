import { Path } from '@azure-tools/sourcemap';
import { fail } from 'assert';
import { ClassDeclaration, EnumDeclaration, EnumMember, ImportDeclarationStructure, InterfaceDeclaration, Node, Project, SourceFile, StructureKind, SyntaxList, TypeAliasDeclaration } from 'ts-morph';
import { ApiModel } from '../model/api-model';
import { TypeReference } from '../model/schema/type';
import { createSandbox } from './sandbox';

/**
 * A ts-morph type declaration node (used when trying to import things between files)
 */
export type TypeDeclaration = TypeAliasDeclaration | InterfaceDeclaration | ClassDeclaration | EnumDeclaration | ClassDeclaration;

const evaluateExpression = createSandbox();
function quote(text: string) {
  return JSON.stringify(text);
}
/**
 * returns the best possible identifier for the node
 * @param node the node to create an identifier for.
 */
export function getNodeIdentifier(node: Node) {
  // for some nodes, we have to give it an expression that can 
  // effectively find the node we're looking for.
  // this can be far more reliable than using the name or index 
  // as a means to find something.
  switch (node.getKindName()) {
    case 'SourceFile':
      return (<any>node).getFilePath();

    case 'EnumMember':
      return `$.getMember(${quote((<EnumMember>node).getName())})`;

    case 'EnumDeclaration':
      return `$.getEnum(${quote((<EnumDeclaration>node).getName())})`;
  }

  // otherwise, just use the name of the node, or the value, or the index in the list of children
  return (<any>node).getName ? (<any>node).getName() :
    (<any>node).getValue ? (<any>node).getValue() :
      node.getChildIndex();
}
/**
 * returns a Path to the node that we can use to find it again.
 * 
 * @param node the node to create the path for.
 */
export function getPath(node: Node, ...args: Path): Path {
  return [...node.getAncestors().map(getNodeIdentifier), getNodeIdentifier(node), ...args];
}

/**
 * gets the node, given the path and the node/project it is relative to.
 */
export function getNode(path: Path, from: Node | Project): Node | undefined {
  let index = path.shift();
  if (from instanceof Project) {
    from = from.getSourceFile(<string>index)?.getChildAtIndex(0) || fail(`SourceFile ${<string>index} is not in the project`);
    index = path.shift();
  }
  let result: Node | undefined;

  // if the path leads us to an expression that needs to evaluate
  if (typeof index === 'string' && index.startsWith('$.')) {
    console.log(`executing ${index}`);
    result = evaluateExpression(index, { $: from instanceof SyntaxList ? from.getParent() : from });
  }

  // otherwise, just try to find it in the children
  if (result === undefined) {
    result = from.getChildren().find((each: any) => {
      if ((<any>each).getName && (<any>each).getName() === index) {
        return true;
      }
      if ((<any>each).getValue && (<any>each).getValue() === index) {
        return true;
      }
      return false;
    }) || (typeof index === 'number' ? from.getChildAtIndex(index) : undefined);
  }

  return result && path.length ? getNode(path, result) : result;
}

/**
 * Creates a reference to the node that will reacquire the target if the AST forces the node object to be forgotten or invalid.
 * 
 * @param input the node to create a reference for.
 */
export function referenceTo<T extends Node>(input: T): T {
  const project = input.getProject();
  let current = input;
  const path = getPath(input);

  return new Proxy(input, {
    get: (originalTarget: T, property: keyof T, proxy: T): any => {
      return Reflect.get(current.wasForgotten() ? (current = <T>getNode([...path], project)) : current, property);
    },
    getOwnPropertyDescriptor: (originalTarget: T, property: keyof T) => {
      return Reflect.getOwnPropertyDescriptor(current.wasForgotten() ? (current = <T>getNode([...path], project)) : current, property);
    },
    has: (originalTarget: T, property: keyof T): boolean => {
      return Reflect.has(current.wasForgotten() ? (current = <T>getNode([...path], project)) : current, property);
    },
    set: (originalTarget: T, property: keyof T, value: any, receiver: any) => {
      return Reflect.set(current.wasForgotten() ? (current = <T>getNode([...path], project)) : current, property, value);
    }
  });
}

export function getAPI<T extends Node>(input: T): ApiModel {
  return (<any>input.getProject()).api;
}

export function IsTypeDeclaration(node?: Node): node is TypeDeclaration {
  return node instanceof TypeAliasDeclaration || node instanceof ClassDeclaration || node instanceof InterfaceDeclaration || node instanceof EnumDeclaration;
}

export function getImportFor(type: EnumDeclaration | InterfaceDeclaration | TypeAliasDeclaration, relativeToSourceFile: SourceFile): ImportDeclarationStructure {
  return {
    kind: StructureKind.ImportDeclaration,
    namedImports: [type.getName()],
    moduleSpecifier: relativeToSourceFile.getRelativePathAsModuleSpecifierTo(type.getSourceFile())
  };
}

export function createImportFor(name: string, sourceFile: SourceFile, relativeToSourceFile: SourceFile): ImportDeclarationStructure {
  return {
    kind: StructureKind.ImportDeclaration,
    namedImports: [name],
    moduleSpecifier: relativeToSourceFile.getRelativePathAsModuleSpecifierTo(sourceFile)
  };
}

export function addImportsTo(sourceFile: SourceFile, typeReference: TypeReference) {
  if (typeReference.sourceFile && sourceFile !== typeReference.sourceFile) {
    const typeName = typeReference.declaration;

    const importDecls = sourceFile.getImportDeclarations();
    let found = false;

    for (const importDecl of importDecls) {
      if (importDecl.getModuleSpecifierSourceFile() === typeReference.sourceFile) {
        // we've got imports from that sourcefile 
        if (!importDecl.getNamedImports().find(imp => imp.getName() === typeName)) {
          // we've referenced the file, but not imported the type.
          importDecl.addNamedImport(typeName);
        }
        // it's imported now
        found = true;
        break;
      }

      // wasn't that file
    }
    // wasn't imported yet. Let's add it.
    if (!found) {
      sourceFile.addImportDeclaration(createImportFor(typeName, typeReference.sourceFile, sourceFile));
    }
  }

  // now, add any requiredTypes to this file too.
  for (const each of typeReference.requiredReferences) {
    addImportsTo(sourceFile, each);
  }
}

export function addNullable(declaration: string) {
  return declaration.endsWith('| null') ? declaration : `${declaration} | null`;
}

export function getInnerText(declaration: InterfaceDeclaration) {
  const text = declaration.getText();
  return text.substring(text.indexOf('{'));
}