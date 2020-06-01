// NEED: URL and method name.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "PostOperationIdContainsUrlVerb",
    code: "R2066",
    type: "warning",
    description: "A POST operation's operationId should contain the verb indicated at the end of the corresponding url.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2066-postoperationidcontainsurlverb",
    category: "SDK Warning"
  },
  onOperation: (context, operation) => {
    if (operation.method === "POST" && operation.id) {
      let id = operation.id;
      let idParts = id.split('_');
      let urlParts = operation.url.split('/');
      let urlVerb = urlParts[urlParts.length - 1];
      if (idParts.length > 1 && !idParts[1].includes(urlVerb)) {
        return [
          {
            message: "Ensure that the operationId for POST operation contains the verb indicated at the end of the url."
          }
        ]
      }
    }
  }
}
