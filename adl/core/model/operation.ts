import { FunctionTypeNode, InterfaceDeclaration, MethodDeclaration, ParameterDeclaration, SourceFile, TupleTypeNode, TypeAliasDeclaration } from 'ts-morph';
import { Element } from './element';
import { TypeReference } from './schema/type';
import { NamedElement } from './typescript/named-element';
import { TSElement } from './typescript/typescript-element';

export interface ResultTypeReference extends TypeReference {

}

export interface ResponseTypeReference extends TypeReference {

}
export interface ResponseCollectionTypeReference extends TypeReference {

}

export function isReference<T>(instance: T|Reference<T>): instance is Reference<T> { 
  return  !!((<any>instance).target);
}

export class Reference<T> extends NamedElement<InterfaceDeclaration| TypeAliasDeclaration>  {
  constructor(node: InterfaceDeclaration|TypeAliasDeclaration) {
    super(node);
  }

  get target(): T {
    throw new Error('not implemented');
  }
}

export class ResponseCollection extends TSElement<TupleTypeNode> {
  constructor(node: TupleTypeNode) {
    super(node);
  }

  get responses(): Array<ResponseElement | Reference<ResponseElement>> {
    return [];
  }
}

export class ParameterElement extends NamedElement<ParameterDeclaration> {
  
}

export class ResultElement extends TSElement<InterfaceDeclaration|TypeAliasDeclaration> implements TypeReference {
  declaration!: string;
  requiredReferences!: Array<TypeReference>;

  isInline?: boolean | undefined;
}

export class ResponseCriteria extends TSElement<FunctionTypeNode> {
  constructor(node: FunctionTypeNode) {
    super(node);
  }
}

export class ResponseElement implements TypeReference  {
  declaration!: string;
  requiredReferences!: Array<TypeReference>;
  sourceFile?: SourceFile;
  isInline?: boolean | undefined;

  criteria!: ResponseCriteria;
  result?: ResultElement | Reference<ResultElement>;
}

export class OperationGroup extends NamedElement<InterfaceDeclaration>  {
  get operations(): Array<Operation> {
    return [];
  }
}

export class Operation extends NamedElement<MethodDeclaration> {
  constructor(node: MethodDeclaration) {
    super(node);
  }

  get parameters(): ReadonlyArray<ParameterElement> {
    return this.node.getParameters().map( each => new ParameterElement(each));
  }

  get response(): ResponseCollection|Reference<ResponseCollection> {
    throw new Error('Not Implemented');
  }
 
}

export class Response extends Element {
  /** 
   * indicates that this response should be considered and exception (an error)
   */
  isException?: boolean;

  /** schema for the response content */
  typeref?: TypeReference;
  /**
   * 
   * @param initializer the object initializer for this response
   */
  constructor(initializer?: Partial<Response>) {
    super();
    this.initialize(initializer);
  }
}


export class Parameter extends Element {
  /**
   * extended description of the schema
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /** 
   * determines whether this parameter is mandatory.
   */
  required?: boolean;

  constructor(public name: string, public typeRef: TypeReference, initializer?: Partial<Parameter>) {
    super();
    this.initialize(initializer);
  }
}

export class Request extends Element {

}