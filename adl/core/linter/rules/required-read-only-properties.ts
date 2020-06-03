// This rule suggests three ways to fix an error.
// The user should be able to choose a fix using code actions.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "required-read-only-properties",
    code: "R2056",
    type: "error",
    description: "A model property cannot be both readOnly and required. A readOnly property is something that the server sets when returning the model object while required is a property to be set when sending it as a part of the request body.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2056-requiredreadonlyproperties",
    category: "SDK Error"
  },
  onProperty: (model, property) => {
    if (property.required && property.readonly) {
      return [
        {
          message: "Set required = false.",
          fix: () => {
            property.readonly = false;
          }
        },
        {
          message: "Set remove = false",
          fix: () => {
            property.required = false;
          }
        },
        {
          message: "Set required = false and readonly = false.",
          fix: () => {
            property.required = false;
            property.readonly = false;
          }
        }
      ]
    }

    return;
  }
}
