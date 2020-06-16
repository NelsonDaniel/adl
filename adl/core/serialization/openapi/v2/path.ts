import { items, length, values } from '@azure-tools/linq';
import { common, isReference, v2 } from '@azure-tools/openapi';
import { JsonReference, ParameterLocation } from '@azure-tools/openapi/dist/v2';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { Alias } from '../../../model/alias';
import { createOperationGroup, createOperationStructure, Method, OperationStructure, Path } from '../../../model/http/operation';
import { Parameter } from '../../../model/http/parameter';
import { Request } from '../../../model/http/request';
import { Response } from '../../../model/http/response';
import { addExtensionsToAttic, push } from '../common';
import { getGroupAndName } from '../common/path';
import { versionInfo } from '../common/schema';
import { requestBody } from './body-parameter';
import { parameter } from './parameter';
import { response } from './response';
import { Context } from './serializer';

export async function processPaths(pathLists: Array<v2.Paths>, $: Context) {
  const map = new Map<string, Array<OperationStructure>>();
  for (const pathList of pathLists) {
    for (let [, path] of items(pathList)) {
      if (isReference(path)) {
        path = <v2.PathItem>((await $.resolveReference(path.$ref)).node);
      }
      for await (const operation of processPath(path, $)) {
        let operations = map.get(operation.group);
        if (!operations) {
          operations = new Array<OperationStructure>();
          map.set(operation.group, operations);
        }
        operations.push(operation);
      }
    }
  }

  for (const [group, structures] of items(map)) {
    createOperationGroup($.api, group, structures);
  }
}

async function* processPath(pathItem: v2.PathItem, $: Context): AsyncGenerator<OperationStructure> {
  const path = nameOf(pathItem);
  for (const method of values(common.HttpMethod)) {
    if (method in pathItem) {
      yield processOperation({method: <Method><unknown>method, path}, pathItem[<common.HttpMethod>method], pathItem, $);
    }
  }
  addExtensionsToAttic($.api.http, pathItem);
}

async function processOperation(path: Path, operation: v2.Operation, shared: v2.PathItem, $: Context): Promise<OperationStructure> {
  const [group, name] = getGroupAndName(operation, path.path);

  const parameters = new Array<Parameter | Alias<Parameter>>();
  const requests = new Array<Request | Alias<Request>>();
  const responses = new Array<Response | Alias<Response>>();
  const tags = operation.tags ?? [];

  // OAI2 parameters are all in the operation
  for (const p of values(shared.parameters)) {
    if (isReference(p)) {
      const r = (await $.resolveReference(p.$ref)).node;
      if (r.in == ParameterLocation.Body || r.in == ParameterLocation.FormData) {
        push(requests, $.processInline(requestBody, <JsonReference<v2.BodyParameter>> p, { isAnonymous: true, operation }));
        continue;
      }
    } else if (p.in == ParameterLocation.Body || p.in == ParameterLocation.FormData )  {
      push(requests, $.processInline(requestBody, <v2.BodyParameter>p, { isAnonymous: true, operation}));
      continue;
    }

    // create each parameter in the operation  (non-body)
    await push(parameters, $.processInline(parameter, p));
  }

  const consumes = operation?.consumes || $.sourceModel.consumes || [];
  if( length( consumes) > 0  && operation.parameters?.find(each =>(<any>each).in === ParameterLocation.Body) === undefined )   {
    // they specified a body content type, but no actual body parameter, which means
    // they get an anonymous one added 
    for( const mediaType of consumes ) {
      requests.push( new Request(anonymous('requestBody'),mediaType,$.api.primitives.file));
    }
  }

  for (const p of values(operation.parameters)) {
    // create each parameter in the operation 
    if (isReference(p)) {
      const r = (await $.resolveReference(p.$ref)).node;
      if (r.in == ParameterLocation.Body) {
        push(requests, $.processInline(requestBody, <JsonReference<v2.BodyParameter>>p, { isAnonymous: true, operation }));
        continue;
      }
    } else if (p.in == ParameterLocation.Body) {
      push(requests, $.processInline(requestBody, <v2.BodyParameter>p, { isAnonymous: true, operation }));
      continue;
    }

    // create each parameter in the operation  (non-body)
    await push(parameters, $.processInline(parameter, p, {isAnonymous: true}));
  }

  for await (const rsp of $.processDictionary(response, <any>operation.responses, {operation})) {
    responses.push(rsp);
  }

  return createOperationStructure(
    $.api,
    path,
    group,
    name, {
      summary: operation.summary,
      description: operation.description,
      tags: operation.tags,
      parameters,
      requests,
      responses,
      ...versionInfo($, operation)
    });

  // TODO: Things below are not batched because they are not emitted to TS yet
  // pick up external docs
  // for await (const reference of processExternalDocs(operation.externalDocs, $)) {
  //   result.references.push(reference);
  // }

  // // since we're not going thru $.process
  // $.addVersionInfo(result, operation);

  // // push to the attic for now
  // result.addToAttic('security', operation.security);

  // result.addToAttic('x-ms-examples', operation['x-ms-examples']);
  // result.addToAttic('x-ms-pageable', operation['x-ms-pageable']);
  // result.addToAttic('x-ms-long-running-operation-options', operation['x-ms-long-running-operation-options']);
  // result.addToAttic('x-ms-long-running-operation', operation['x-ms-long-running-operation']);

  // yield addExtensionsToAttic(result, operation);
}