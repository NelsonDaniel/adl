import { isAnonymous } from '@azure-tools/sourcemap';
import { InterfaceDeclaration, JSDocTagStructure, MethodSignature, MethodSignatureStructure, ParameterDeclarationStructure, StructureKind } from 'ts-morph';
import { normalizeIdentifier, normalizeName } from '../../support/codegen';
import { createDocs, getLastDoc, getTagValue, setTag } from '../../support/doc-tag';
import { Alias } from '../alias';
import { ApiModel } from '../api-model';
import * as base from '../operation';
import { Reference } from '../reference';
import { VersionedEntity } from '../schema/object';
import { NamedElement } from '../schema/schema';
import { ArrayCollectionImpl, Collection, CollectionImpl } from '../types';
import { Parameter, ParameterType } from './parameter';
import { AuthenticationRequirement, Connection } from './protocol';
import { Request } from './request';
import { Response } from './response';

export enum Method {
  Get = 'get',
  Put = 'put',
  Post = 'post',
  Delete = 'delete',
  Options = 'options',
  Head = 'head',
  Patch = 'patch',
  Trace = 'trace'
}

export interface Path {
  method: Method;
  path: string;
}

export interface Operation extends base.Operation {
  /** A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier. */
  readonly tags: Collection<string>;

  /** A group name to group this operation with others. */
  readonly group: string;

  /** A name for this operation within its group. */
  name: string;

  /** The HTTP method used and the path operated upon. */
  path: Path;

  /** parameters common to all the requests(overloads) for this operation */
  readonly parameters: Collection<Parameter | Alias<Parameter>>;

  /** possible requests that can be made for this operation (ie, overloads)  */
  readonly requests: Collection<Request | Alias<Request>>;

  /** non-error outputs from this operation */
  readonly responses: Collection<Response | Alias<Response>>;

  /** a collection of reference information regarding the operation  */
  readonly references: Collection<Reference>;

  /**
   * Authentication requirements for this operation, which override those specified globally.
   *
   * Only one of the elements in the array needs to be satisfied to authorize a request.
   */
  readonly authenticationRequirements: Collection<AuthenticationRequirement>;

  /** Connections for this operation, which override those specified globally. */
  readonly connections: Collection<Connection>;
}

export interface OperationInitializer extends VersionedEntity {
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

function createResponseStructures(responses?: Array<Response | Alias<Response>>, currentReturnType = '') {
  let returnType = currentReturnType;
  const tagStructures = new Array<JSDocTagStructure>();

  for (const each of responses ?? []) {
    if (returnType != '') {
      returnType += ' | ';
    }
    const response = each instanceof Alias ? each.target : each;
    const type = getResponseType(response);

    if (response.description) {
      const doc = `${response.name} - ${response.description}`;
      tagStructures.push({
        kind: StructureKind.JSDocTag,
        tagName: 'return',
        text: doc,
      });
    }

    returnType += type;
  }

  return { type: returnType, tags: tagStructures };
}

function getParameterType(parameter: Parameter, chosenName: string) {
  const innerType = parameter.typeRef.declaration;
  const outerType = getOuterParameterType(parameter.type);
  const nameArg = parameter.name == chosenName ? '' : `, '${parameter.name}'`;
  return `${outerType}<${innerType}${nameArg}>`;
}

function getOuterParameterType(parameterType: ParameterType) {
  switch (parameterType) {
    case ParameterType.Cookie:
      return 'Http.Cookie';
    case ParameterType.FormData:
      return 'Http.FormData';
    case ParameterType.Header:
      return 'Http.Header';
    case ParameterType.Path:
      return 'Http.Path';
    case ParameterType.Query:
      return 'Http.Query';
    default:
      throw new Error(`Invalid parameter type '${parameterType}'`);
  }
}

function getRequestType(request: Request, chosenName: string) {
  const innerType = request.typeRef.declaration;
  const outerType = 'Http.Body';
  const mediaTypeArg = `, '${request.mediaType}'`;
  const nameArg = (!request.name || request.name == chosenName) ? '' : `, '${request.name}'`;
  return `${outerType}<${innerType}${mediaTypeArg}${nameArg}>`;
}

function getResponseType(response: Response) {
  const outerType = response.isException ? 'Http.Exception' : 'Http.Response';
  const statusArg = getStatusArg(response);
  const schema = response.typeref;
  const schemaArg = schema ? `, ${schema}` : response.mediaType ? ', none' : '';
  const mediaTypeArg = response.mediaType ? `, '${response.mediaType}'` : '';
  return `${outerType}<${statusArg}${schemaArg}${mediaTypeArg}>`;
}

function getStatusArg(response: Response) {
  const status = isAnonymous(response.name) ? 'default' : response.name;
  return status == 'default' ? 'Http.Default' : `'${status}'`;
}

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
      this.node.getReturnTypeNode()?.getText() ?? '');

    this.node.setReturnType(responseStructures.type);
    getLastDoc(this.node).addTags(responseStructures.tags);
  }
}