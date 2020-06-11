import { items } from '@azure-tools/linq';
import { v3 } from '@azure-tools/openapi';
import { Element } from '../../../model/element';
import { header } from './header';
import { parameter } from './parameter';
import { requestBody } from './request-body';
import { response } from './response';
import { processSchema } from './schema';
import { authentication } from './security';
import { Context } from './serializer';

const { vendorExtensions } = v3;


// eslint-disable-next-line require-yield
export async function* processComponents(components: v3.Components, $: Context): AsyncGenerator<Element> {

  for (const [key, extension] of vendorExtensions(components)) {
    // switch(key)

  }

  for (const [key, value] of items(components.schemas)) {
    // process each item in the collection
    await processSchema(value, $);
  }

  // if there are vendor extensions in the dictionary, they should be handled like this:
  // for (const { key, value: extension } of vendorExtensions(components.headers)) {
  // ... do something ...
  // }
  for await (const h of $.processDictionary(header, components.headers)) {
    $.api.http.headers.push(h);
  }

  for await (const p of $.processDictionary(parameter, components.parameters)) {
    $.api.http.parameters.push(p);
  }

  for await (const request of $.processDictionary(requestBody, components.requestBodies)) {
    $.api.http.requests.push(request);
  }

  for await (const rsp of $.processDictionary(response, components.responses)) {
    $.api.http.responses.push(rsp);
  }

  for await (const auth of $.processDictionary(authentication, components.securitySchemes)) {
    $.api.http.authentications.push(auth);
  }


  // await $.process(processExamples, components.examples); // send to attic 
  // await $.process(processCallbacks, components.callbacks);  // ok skip
  // await $.process(processLinks, components.links); // ok skip


  return undefined;
}