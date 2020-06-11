import { length, values } from '@azure-tools/linq';
import { v2 } from '@azure-tools/openapi';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { Response } from '../../../model/http/response';
import { addExtensionsToAttic } from '../common';
import { header } from './header';
import { processSchema } from './schema';
import { Context } from './serializer';


export async function* response(response: v2.Response, $: Context, options?: { isAnonymous?: boolean; operation: v2.Operation }): AsyncGenerator<Response> {
  const responseName = options?.isAnonymous ? anonymous('response') : nameOf(response);
  const operation = options?.operation;
  const produces = operation?.produces || $.sourceModel.produces || [];

  if (length(produces) === 0) {
    // no body/content
    const result = new Response(responseName, '', {
      description: response.description,
    });

    for (const value of values(response.headers)) {
      for await (const h of $.processInline(header, value)) {
        result.headers.push(h);
      }
    }
    return yield addExtensionsToAttic(result, response);
  }

  for (const mediaType of values(produces)) {
    const result = new Response(responseName, mediaType, {
      description: response.description,
      typeref: response.schema ? (await processSchema(response.schema, $, {isAnonymous: true})) : undefined,
    });

    for (const value of values(response.headers)) {
      for await (const h of $.processInline(header, value)) {
        result.headers.push(h);
      }
    }
    yield addExtensionsToAttic(result, response);
  }
}

