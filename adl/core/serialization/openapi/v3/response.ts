import { items, length, values } from '@azure-tools/linq';
import { v3 } from '@azure-tools/openapi';
import { anonymous, nameOf, isAnonymous } from '@azure-tools/sourcemap';
import { Response } from '../../../model/http/response';
import { addExtensionsToAttic } from '../common';
import { header } from './header';
import { processSchema } from './schema';
import { Context } from './serializer';


export async function* response(response: v3.Response, $: Context, options?: { isAnonymous?: boolean }): AsyncGenerator<Response> {
  const responseName = options?.isAnonymous ? anonymous('response') : nameOf(response);
  const isException = !isAnonymous(responseName) && (responseName == 'default' || responseName.startsWith('4') || responseName.startsWith('5'));

  if (length(response.content) === 0) {
    // no body/content
    const result = new Response(responseName, '', {
      description: response.description,
      isException
    });

    for (const value of values(response.headers)) {
      for await (const h of $.processInline(header, value)) {
        result.headers.push(h);
      }
    }
    return yield addExtensionsToAttic(result, response);
  }

  for (const [mediaType, type] of items(response.content)) {
    const result = new Response(responseName, mediaType, {
      description: response.description,
      typeref:  type.schema ? await processSchema(type.schema, $, {isAnonymous: true}) : undefined,
      isException
    });

    for (const value of values(response.headers)) {
      for await (const h of $.processInline(header, value)) {
        result.headers.push(h);
      }
    }
 
    // example data we can figure out later.
    result.addToAttic('example', type.example);
    // example data we can figure out later.
    result.addToAttic('examples', (<any>type).examples);

    // encoding information not necessary yet... 
    result.addToAttic('encoding', type.encoding);

    yield addExtensionsToAttic(result, response);
  }

}

