
// NEED: URL and method name.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "invalid-verb-used",
    code: "R2044 ",
    type: "error",
    description: "A POST operation's operationId should contain the verb indicated at the end of the corresponding url.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2066-postoperationidcontainsurlverb",
    category: "ARM Error"
  },
  onOperation: (model, operation) => {
    // if (validMethods.includes(operation.method.toUpper())) {
    //   let ruleResults = [];
    //   for (method of validMethods) {
    //     ruleResults.push({
    //       message: `Replace method with ${method}`,
    //       fix: () => {
    //         operation.method = method;
    //       }
    //     })
    //   }

    //   return ruleResults;
    // }
  }
}
