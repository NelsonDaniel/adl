// This rule warns the user about naming inside an operation and provides a hint on how to solve the issue.

import { Method } from "../../model/http/operation";
import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "post-method-contains-url-verb",
    code: "PLACEHOLDER",
    type: "warning",
    description: "A POST operation's name should contain the verb indicated at the end of the corresponding url.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2066-postoperationidcontainsurlverb",
    category: "SDK Warning"
  },
  onOperation: (model, operation) => {
    if (operation.path.method === Method.Post) {
      let urlParts = operation.path.path.split('/');
      let urlVerb = urlParts[urlParts.length - 1];
      if (!operation.name.toLowerCase().includes(urlVerb.toLowerCase())) {
        return [
          {
            message: `POST type operation's name: ${operation.name} does not contain the verb indicated at the end of the url: ${operation.path.path}. 
                      Ensure that the operationId for POST operation contains the verb indicated at the end of the url.`
          }
        ]
      }
    }

    return;
  }
}
