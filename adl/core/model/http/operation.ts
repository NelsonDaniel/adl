import { isAnonymous } from '@azure-tools/sourcemap';
import { JSDoc, JSDocTagStructure, MethodSignatureStructure, Node, ParameterDeclarationStructure, StructureKind, ts } from 'ts-morph';
import { normalizeIdentifier, normalizeName, printCompilerNode } from '../../support/codegen';
import { createDocs, getTagValue, setTag } from '../../support/doc-tag';
import { Alias } from '../alias';
import { ApiModel } from '../api-model';
import * as base from '../operation';
import { Reference } from '../project/reference';
import { Identity } from '../types';
import { VersionedElement } from '../typescript/versioned-element';
import { Header } from './header';
import { Parameter, ParameterElement, ParameterType } from './parameter';
import { Request } from './request';
import { Response, ResponseElement } from './response';


export enum Method {
  Get = 'GET',
  Put = 'PUT',
  Post = 'POST',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Head = 'HEAD',
  Patch = 'PATCH',
  Trace = 'TRACE'
}

export interface Path {
  method: Method;
  path: string;
}

export class TagCollection {
  constructor(private node: Node | Array<JSDoc> | JSDoc) {
  }
}

export class OperationGroup extends base.OperationGroup {
  
  get operations(): Array<Operation> {
    throw new Error('Method not implemented.');
  }

  /**
   * Creates a new HttpOperation in this operation group.
   */
  createOperation() {

  }
  
}

export class ResponseCollection extends base.ResponseCollection {

}

export class Operation extends base.Operation {
  /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
  readonly tags = new TagCollection(this.node);

  /** The HTTP method used and the path operated upon. */
  get path(): string {
    return /([^\s]*)\s+(.*)/.exec(getTagValue(this.node, 'http')||'')?.[2] || '';
  }
  set path(value: string) {
    setTag(this.node,'http' , `${this.method} ${value}`);
  }

  get method(): Method  {
    const m = ( /([^\s]*)\s+(.*)/.exec(getTagValue(this.node, 'http') || '')?.[1] || '' ).toUpperCase();
    return <Method>m;
  }
  set method(value: Method) {
    setTag( this.node,'http' , `${value} ${this.path}`);
  }

  /** parameters common to all the requests(overloads) for this operation */
  readonly parameters!: ReadonlyArray<ParameterElement>;

  readonly responses!: ReadonlyArray<ResponseElement>;

  /**
   * Authentication requirements for this operation, which override those specified globally.
   *
   * Only one of the elements in the array needs to be satisfied to authorize a request.
   */
  // readonly authenticationRequirements: Collection<AuthenticationRequirement>;

  /** Connections for this operation, which override those specified globally. */
  // readonly connections: Collection<Connection>;
}

export interface OperationInitializer extends VersionedElement {
  description: string;
  summary: string;
  tags: Array<string>;
  parameters: Array<Parameter | Alias<Parameter>>;
  requests: Array<Request | Alias<Request>>;
  responses: Array<Response | Alias<Response>>;
  references: Array<Reference>;
}

export interface OperationStructure extends MethodSignatureStructure {
  group: string;
}

export function createOperationGroup(
  api: ApiModel,
  group: string,
  operations: Array<MethodSignatureStructure>
) {
  const file = api.getFile(group, 'group');
  file.addInterface({
    name: group,
    isExported: true,
    methods: operations,
  });
}

export function createOperationStructure(
  api: ApiModel,
  path: Path,
  group: string,
  name: string,
  initializer: Partial<OperationInitializer>
): OperationStructure {

  const parameterStructures = createParameterStructures(initializer.parameters);
  const requestStructures = createRequestStructures(initializer.requests);
  const responseStructures = createResponseStructures(initializer.responses);
  const tagStructures = createTagStructures(initializer.tags);
  const pathStructure = createPathStructure(path);

  return {
    kind: StructureKind.MethodSignature,
    group: normalizeIdentifier(group),
    name: normalizeIdentifier(name),
    returnType: responseStructures.type,
    parameters: [
      ...parameterStructures.parameters,
      ...requestStructures.parameters
    ],
    docs: createDocs(initializer, [
      pathStructure,
      ...tagStructures,
      ...parameterStructures.tags,
      ...requestStructures.tags,
      ...responseStructures.tags
    ]),
  };
}

function createPathStructure(path: Path): JSDocTagStructure {
  return {
    kind: StructureKind.JSDocTag,
    tagName: 'http',
    text: `${path.method.toUpperCase()} ${path.path}`,
  };
}

function createTagStructures(tags?: Array<string>) {
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of tags ?? []) {
    tagStructures.push({
      kind: StructureKind.JSDocTag,
      tagName: 'tag',
      text: each
    });
  }

  return tagStructures;
}

function createParameterStructures(parameters?: Array<Parameter | Alias<Parameter>>) {
  const parameterStructures = new Array<ParameterDeclarationStructure>();
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of parameters ?? []) {
    const parameter = each instanceof Alias ? each.target : each;
    const name = normalizeName(parameter.name);
    const type = getParameterType(parameter, name);

    parameterStructures.push({
      kind: StructureKind.Parameter,
      hasQuestionToken: !parameter.required,
      name,
      type,
    });

    if (parameter.description) {
      const doc = `${name} - ${parameter.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'param',
        text: doc,
      });
    }
  }

  return { parameters: parameterStructures, tags: tagStructures };
}

function createRequestStructures(requests?: Array<Request | Alias<Request>>) {
  const parameterStructures = new Array<ParameterDeclarationStructure>();
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of requests ?? []) {
    const request = each instanceof Alias ? each.target : each;
    const name = normalizeName(request.name ?? 'body');
    const type = getRequestType(request, name);

    parameterStructures.push({
      kind: StructureKind.Parameter,
      hasQuestionToken: !request.required,
      name,
      type,
    });

    if (request.description) {
      const doc = `${name} - ${request.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'param',
        text: doc,
      });
    }
  }

  return { parameters: parameterStructures, tags: tagStructures };
}

function createResponseStructures(
  responses?: Array<Response | Alias<Response>>,
  currentReturnType: ts.TypeNode = ts.createTupleTypeNode([])) {

  if (!ts.isTupleTypeNode(currentReturnType)) {
    throw new Error('Operation has invalid return type');
  }

  const reponseTypes = new Array<ts.FunctionTypeNode>();
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of responses ?? []) {
    const response = each instanceof Alias ? each.target : each;
    const type = getResponseType(response);
    reponseTypes.push(type);

    if (response.description) {
      const doc = `${response.name}|${response.mediaType} - ${response.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'return',
        text: doc,
      });
    }
  }

  const returnType = ts.createTupleTypeNode([
    ...currentReturnType.elementTypes, 
    ...reponseTypes
  ]);

  return { 
    type: printCompilerNode(returnType),
    tags: tagStructures
  };
}

function getParameterType(parameter: Parameter, chosenName: string) {
  const innerType = parameter.typeRef.declaration;
  const outerType = getOuterParameterType(parameter.type);
  const nameArg = parameter.name == chosenName ? '' : `, '${parameter.name}'`;

  if (outerType == 'Path' && nameArg == '') {
    return innerType;
  }

  return `${outerType}<${innerType}${nameArg}>`;
}

function getOuterParameterType(parameterType: ParameterType) {
  switch (parameterType) {
    case ParameterType.Cookie:
      return 'Cookie';
    case ParameterType.FormData:
      return 'FormData';
    case ParameterType.Header:
      return 'Header';
    case ParameterType.Path:
      return 'Path';
    case ParameterType.Query:
      return 'Query';
    default:
      throw new Error(`Invalid parameter type '${parameterType}'`);
  }
}

function getRequestType(request: Request, chosenName: string) {
  const innerType = request.typeRef.declaration;
  const outerType = 'Body';
  const mediaTypeArg = `, '${request.mediaType}'`;
  const nameArg = (!request.name || request.name == chosenName) ? '' : `, '${request.name}'`;
  return `${outerType}<${innerType}${mediaTypeArg}${nameArg}>`;
}

function getResponseCodeParameter(code: Identity) {
  if (isAnonymous(code) || code == 'default') {
    return undefined;
  }

  const literal = /^\d+$/.test(code) ? ts.createNumericLiteral(code) : ts.createStringLiteral(code);
  const literalType = ts.createLiteralTypeNode(literal);
  return ts.createParameter(undefined, undefined, undefined, 'code', undefined, literalType);
}

function getMediaTypeParameter(mediaType: string) {
  if (!mediaType) {
    return undefined;
  }

  const literal = ts.createStringLiteral(mediaType);
  const literalType = ts.createLiteralTypeNode(literal);
  return ts.createParameter(undefined, undefined, undefined, 'mediaType', undefined, literalType);
}

function getResponseCriteria(response: Response) {
  const parameters = new Array<ts.ParameterDeclaration>();

  const code = getResponseCodeParameter(response.name);
  if (code) {
    parameters.push(code);
  }

  const mediaType = getMediaTypeParameter(response.mediaType);
  if (mediaType) {
    parameters.push(mediaType);
  }

  return parameters;
}

function getResponseDefinition(response: Response) {
  const properties = new Array<ts.PropertySignature>();

  if (response.typeref) {
    const typeReference = ts.createTypeReferenceNode(response.typeref.declaration, undefined);
    properties.push(ts.createPropertySignature(undefined, 'body', undefined, typeReference, undefined));
  }

  if (response.headers.length > 0) {
    const headerType = getHeadersType(response.headers);
    properties.push(ts.createPropertySignature(undefined, 'headers', undefined, headerType, undefined));
  }

  if (response.isException) {
    const literalTrueType = ts.createLiteralTypeNode(ts.createTrue());
    properties.push(ts.createPropertySignature(undefined, 'isException', undefined, literalTrueType, undefined));
  }

  return ts.createTypeLiteralNode(properties);
}

function getResponseType(response: Response) {
  return ts.createFunctionTypeNode(
    undefined,
    getResponseCriteria(response),
    getResponseDefinition(response));
}

function getHeadersType(headers: Array<Header | Alias<Header>>) {
  const typeReferences = new Array<ts.TypeReferenceNode>();
  
  for (let each of headers) {
    if (each instanceof Alias) {
      each = each.target;
    }

    const args = [
      ts.createTypeReferenceNode(each.typeRef?.declaration ?? 'any', undefined),
      ts.createLiteralTypeNode(ts.createStringLiteral(each?.name))
    ];
  
    const typeReference = ts.createTypeReferenceNode('Header', args); 
    typeReferences.push(typeReference);
  }

  return ts.createTupleTypeNode(typeReferences);
}

/*
class OperationImpl extends NamedElement<MethodSignature> implements Operation {
  readonly tags: CollectionImpl<string, this>;
  readonly parameters: CollectionImpl<Parameter | Alias<Parameter>, this>;
  readonly requests: CollectionImpl<Request | Alias<Request>, this>;
  readonly responses: CollectionImpl<Response | Alias<Response>, this>;
  readonly references = new ArrayCollectionImpl<Reference>();
  readonly authenticationRequirements = new ArrayCollectionImpl<AuthenticationRequirement>();
  readonly connections = new ArrayCollectionImpl<Connection>();

  constructor(node: MethodSignature) {
    super(node);
    this.parameters = new CollectionImpl(this, this.pushParameters, undefined!, undefined!);
    this.requests = new CollectionImpl(this, this.pushRequests, undefined!, undefined!);
    this.responses = new CollectionImpl(this, this.pushResponses, undefined!, undefined!);
    this.tags = new CollectionImpl(this, this.pushTags, undefined!, undefined!);
  }

  get group() {
    return (<InterfaceDeclaration>(this.node.getParent())).getName()!;
  }

  get name() {
    return <string>super.name;
  }
  set name(value: string) {
    super.name = value;
  }

  get path(): Path {
    const tag = getTagValue(this.node, 'http')!;
    const [method, path] = tag.split(' ', 2);
    return { method: Method[<keyof typeof Method>method], path };
  }
  set path(path: Path) {
    setTag(this.node, 'http', `${path.method.toUpperCase()} ${path.path}`);
  }

  private pushTags(...tags: Array<string>) {
    const tagStructures = createTagStructures(tags);
    getLastDoc(this.node).addTags(tagStructures);
  }

  private pushParameters(...parameters: Array<Parameter | Alias<Parameter>>) {
    const parameterStructures = createParameterStructures(parameters);
    this.node.addParameters(parameterStructures.parameters);
    getLastDoc(this.node).addTags(parameterStructures.tags);
  }

  private pushRequests(...requests: Array<Request | Alias<Request>>) {
    const requestStructures = createRequestStructures(requests);
    this.node.addParameters(requestStructures.parameters);
    getLastDoc(this.node).addTags(requestStructures.tags);
  }

  private pushResponses(...responses: Array<Response | Alias<Response>>) {
    const responseStructures = createResponseStructures(
      responses, 
      this.node.getReturnTypeNode()?.compilerNode);

    this.node.setReturnType(responseStructures.type);
    getLastDoc(this.node).addTags(responseStructures.tags);
  }
}
*/