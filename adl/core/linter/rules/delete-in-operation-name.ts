// Need: http method name

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "DeleteInOperationName",
    code: "R1009",
    type: "warning",
    description: "DELETE operation should use the method name 'delete'",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r1009-deleteinoperationname",
    category: "SDK Warning"
  },
  onOperation: (model, operation) => {
    const name = operation.name;
    if (operation.path.method.toString() === "DELETE" && name !== "delete") {
      return [
        {
          message: `The operation name ${name} is not allowed. Make sure that operation name for DELETE operation is 'delete'.`,
          fix: () => {
            operation.name = "delete"
          }
        }
      ]
    }

    return;
  }
}
