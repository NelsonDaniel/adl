// Need: http method name

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "DeleteInOperationName",
    code: "R1009",
    type: "warning",
    description: "operationId for DELETE operation should use the method name 'Delete'",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r1009-deleteinoperationname",
    category: "SDK Warning"
  },
  onOperation: (model, operation) => {
    // if (operation.path.method.toString() === "DELETE"
    //   && operation.id
    //   && !(operation.id.endsWith('_delete')
    //     || operation.id.endsWith('_Delete')
    //     || operation.id === "delete"
    //     || operation.id === "Delete"
    //   )
    // ) {
    //   return
    //   [
    //     {
    //       message: "Make sure that operationId is in the form of NOUN_Delete or Delete.",
    //     }
    //   ]

    // }
  }
}
