// NEED: I would like to be able to remove required or readonly instead of setting to false.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "enum-unique-value",
    code: "R3024 ",
    type: "error",
    description: "Enum must not contain duplicated value (case insentive).",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r3024-enumuniquevalue",
    category: "SDK Error"
  },
  onEnum: (context, e) => {
    let arrValues = e.values.get()
    let findDuplicates = arr => arr.filter((item, index) = > arrValues.indexOf(item) != index));
    let duplicates = findDuplicates(arrValues);
    if (duplicates.length > 0) {
      return [
        {
          message: "Remove duplicate values",
          fix: () => {

          }
        }
      ]
    }
  }
}
