import { items } from '@azure-tools/linq';
import { Dictionary, isReference, JsonReference, v2, vendorExtensions } from '@azure-tools/openapi';
import { isVendorExtension, ParameterLocation } from '@azure-tools/openapi/dist/v2';
import { ApiModel } from '../../../model/api-model';
import { HttpProtocol } from '../../../model/http/protocol';
import { Host } from '../../../support/file-system';
import { Context as Ctx, Visitor } from '../../../support/visitor';
import { push } from '../common';
import { processExternalDocs, processInfo, processTag } from '../common/info';
import { processPaths } from '../v2/path';
import { requestBody } from './body-parameter';
import { parameter } from './parameter';
import { processSchema } from './schema';
import { authentication, authenticationRequirement } from './security';
import { processServers } from './server';


// node types that are objects
export type Context = Ctx<v2.Model>;

// node types that are objects or references
export type ItemsOf<T> = Dictionary<T | JsonReference<T>>;

export async function deserializeOpenAPI2(host: Host, ...inputs: Array<string>) {
  const output = await new Visitor<v2.Model>(new ApiModel(), host, 'oai2', ...inputs).process(processRoot);

  return output;
}

async function processRoot(oai2: v2.Model, $: Context) {

  const extensions = vendorExtensions(oai2);

  for (const [key] of extensions) {
    switch (key) {
      case 'x-ms-metadata':

        break;
      default:
        // record unknown extensions at model level
        break;
    }
  }

  // handle info structure
  await processInfo(oai2.info, $);

  // external docs are just a kind of reference
  for await (const reference of $.process(processExternalDocs, oai2.externalDocs)) {
    $.api.projectData.metaData.references.push(reference);
  }

  for await (const reference of $.processArray(processTag, oai2.tags)) {
    $.api.projectData.metaData.references.push(reference);
  }

  for await (const server of $.process(processServers, oai2)) {
    (<HttpProtocol>$.api.protocols.http).connections.push(server);
  }

  for await (const auth of $.processDictionary(authentication, oai2.securityDefinitions)) {
    (<HttpProtocol>$.api.protocols.http).authentications.push(auth);
  }

  for await (const requirement of $.processArray(authenticationRequirement, oai2.security)) {
    (<HttpProtocol>$.api.protocols.http).authenticationRequirements.push(requirement);
  }

  for(const [key,value] of items(oai2.definitions)) {
    // process each item in the collection
    await processSchema(value, $);
  }

  const tmp  = new Array<any>();

  for (const [key, value] of items(oai2.parameters)) {
    if (isVendorExtension(key)) {
      continue;
    }

    if (isReference(value)) {
      const r = (await $.resolveReference(value.$ref)).node;
      if (r.in == ParameterLocation.Body) {
        push(tmp, $.processInline(requestBody, <JsonReference<v2.BodyParameter>>value));
        continue;
      }

      push(tmp, $.processInline(parameter, value));
      continue;
    } else if (value.in == ParameterLocation.Body) {
      push(tmp, $.processInline(requestBody, <v2.BodyParameter>value));
      continue;
    }
    push(tmp, $.process(parameter, value));
  }

  processPaths([oai2.paths, oai2['x-ms-paths']], $);

  return $.api;
}

