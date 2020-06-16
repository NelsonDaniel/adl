import { FunctionTypeNode, InterfaceDeclaration, MethodDeclaration, ParameterDeclaration, TupleTypeNode, TypeLiteralNode } from 'ts-morph';
import { Element } from './element';
import { TypeReference } from './schema/type';
import { NamedElement } from './typescript/named-element';
import { Declaration } from './typescript/reference';
import { TSElement } from './typescript/typescript-element';

export interface ResultTypeReference extends TypeReference {

}

export interface ResponseTypeReference extends TypeReference {

}
export interface ResponseCollectionTypeReference extends TypeReference {

}

export abstract class ResponseCollection extends TSElement<TupleTypeNode> {
  constructor(node: TupleTypeNode) {
    super(node);
  }

  /**
   * returns the collection of responses 
   */
  get responses(): ReadonlyArray<ResponseElement | Declaration<ResponseElement>> {
    return [];
  }

  /**
   * Adds a new response to this collection
   */
  createResponse() {
    // todo
  }

  /**
   * Adds a response to this collection using a globally defined response
   */
  addResponse(declaration: Declaration<ResponseElement>) {
    //todo
  }
}

export class ParameterElement extends NamedElement<ParameterDeclaration> {

}

/**
 * A Result describes a single output from an operation.
 * 
 */
export class ResultElement extends TSElement<TypeLiteralNode | InterfaceDeclaration> implements TypeReference {
  declaration!: string;
  requiredReferences!: Array<TypeReference>;

  isInline?: boolean | undefined;
}

export class ResponseCriteria extends TSElement<FunctionTypeNode> {
  constructor(node: FunctionTypeNode) {
    super(node);
  }
}

/**
 * A Response is the combination of the Criteria and the Result for a possible output from an operation.
 */
export class ResponseElement extends TSElement<FunctionTypeNode> implements TypeReference {
  declaration!: string;
  requiredReferences!: Array<TypeReference>;
  
  isInline?: boolean | undefined;

  readonly criteria!: ResponseCriteria;

  readonly result?: ResultElement | Declaration<ResultElement>;

  /**
   * Creates a new inline Result (removes any previous delared result)
   * 
   * (if you want to set the result to a globally defined result, use {@link setResult})
   */
  createResult() {
    // todo
  }

  setResult() {
    // todo
  }

}

export abstract class OperationGroup extends NamedElement<InterfaceDeclaration>  {
  constructor(node: InterfaceDeclaration) {
    super(node);
  }

  abstract get operations(): Array<Operation>;
  
}

export class Operation extends NamedElement<MethodDeclaration> {
  constructor(node: MethodDeclaration) {
    super(node);
  }

  get parameters(): ReadonlyArray<ParameterElement> {
    return this.node.getParameters().map(each => new ParameterElement(each));
  }

  /**
   * creates a new parameter in this operation
   */
  createParameter() {
    // todo
  }

  /**
   * returns the Response for this operation as either a ResponseCollection the declaration of the ResponseCollection
   */
  get responseCollection(): ResponseCollection | Declaration<ResponseCollection> | undefined {
    throw new Error('Not Implemented');
  }

  /**
   * creates a new Response collection as a literal on this operation 
   * 
   * (if you want to use a declared response declaration, use {@link setResponse} )
   */
  createResponseCollection(){
    // todo
  }

  /**
  * Sets the response for this operation to a declaration of a ResponseCollection
  * 
  * (if you want to create a fresh inline response declaration, use {@link createResponse} )
  * @param response 
  */
  setResponseCollection(value: Declaration<ResponseCollection>) {
    //todo
  }

  /**
   * Removes the response collection (if any) from this operation.
   * 
   * does not alter the declaration if the current response is declared globally.
   */
  removeResponse(){
    // todo
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