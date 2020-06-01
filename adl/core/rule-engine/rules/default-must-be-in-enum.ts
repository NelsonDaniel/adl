import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "default-must-be-in-enum",
    code: "R2027",
    type: "error",
    description: "The value assigned as a default for an enum property must be present in the enums list.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2027-defaultmustbeinenum",
    category: "SDK Error"
  },
  onEnum: (context, e) => {
    if (!e.values.get().includes(e.default)) {
      return [
        {
          message: "Include default in enum values.",
          fix: () => {
            e.values.push(e.default);
          }
        }
      ]
    }
  }
}
