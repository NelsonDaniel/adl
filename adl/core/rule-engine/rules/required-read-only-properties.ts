// NEED: I would like to be able to remove required or readonly instead of setting to false.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "RequiredReadOnlyProperties",
    code: "R2056",
    type: "error",
    description: "A model property cannot be both readOnly and required. A readOnly property is something that the server sets when returning the model object while required is a property to be set when sending it as a part of the request body.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2056-requiredreadonlyproperties",
    category: "SDK Error"
  },
  onProperty: (context, property) => {
    if (property.required && property.readonly) {
      return [
        {
          message: "Mark property as required and remove readonly.",
          fix: () => {
            property.readonly = false;
          }
        },
        {
          message: "Mark property as readonly and remove required.",
          fix: () => {
            property.required = false;
          }
        }
      ]
    }
  }
}
