import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "OperationIdNounVerb",
    code: "R1001",
    type: "error",
    description: "operationId for DELETE operation should use the method name 'Delete'",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r1001-operationidnounverb",
    category: "SDK Error"
  },
  onOperation: (model, operation) => {
    // operation id
    // if (operation.id && !operation.id.match(/[A-Za-z]+_[A-Za-z]+/)) {
    //   return
    //   [
    //     {
    //       message: "Ensure operationId is of the form Noun_Verb.",
    //     }
    //   ]

    // }
  }
}
