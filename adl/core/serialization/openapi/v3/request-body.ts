import { items } from '@azure-tools/linq';
import { v3 } from '@azure-tools/openapi';
import { anonymous, nameOf } from '@azure-tools/sourcemap';
import { Request } from '../../../model/http/request';
import { processSchema } from './schema';
import { Context } from './serializer';

export async function* requestBody(requestBody: v3.RequestBody, $: Context, options?: { isAnonymous?: boolean }): AsyncGenerator<Request> {
  // a single request body gets turned into multiple requests with the same name 
  // (since we only want very weak binding between the requests, that's the job of the actual operation. )

  const bodyName = options?.isAnonymous ? anonymous('requestBody') : nameOf(requestBody);


  for (const [mediaType, type] of items(requestBody.content)) {
    
    const typeref = type.schema ? await processSchema(type.schema, $, {isAnonymous: true}) : { declaration: 'dunno', requiredReferences:[]};

    const request = new Request(bodyName, mediaType, typeref, {
      description: requestBody.description,
      required: requestBody.required,
    });

    // example data we can figure out later.
    request.addToAttic('example', type.example);
    request.addToAttic('examples', (<any>type).examples);

    // encoding information not necessary yet... 
    request.addToAttic('encoding', type.encoding);

    yield request;
  }
}

