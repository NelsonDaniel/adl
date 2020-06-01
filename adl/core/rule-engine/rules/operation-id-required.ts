// NEED: URL and method name.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "OperationIdRequired",
    code: "R4004",
    type: "error",
    description: " Each operation must haave a unique operationId.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r4004-operationidrequired",
    category: "ARM Error"
  },
  onOperation: (context, operation) => {
    if (operation.id === undefined) {
      return [
        {
          message: "Add the right operationId for each operation."
          fix: () => {
            // I would like to be able to prompt them to include the operation id interactively.
          }
        }
      ]
    }
  }
}
}
