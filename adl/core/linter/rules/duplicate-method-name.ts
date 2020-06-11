// NEED: URL and method name.

import { Operation } from "../../model/http/operation";
import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "duplicate-method-name",
    code: "PLACEHOLDER",
    type: "error",
    description: "Each operation must have a unique name.",
    documentationUrl: "https://PLACEHOLDER",
    category: "Error"
  },
  onOperation: (model, operation) => {
    let count = 0;
    for (const each of model.http.operations) {
      if (each.name === operation.name && (<Operation>each).group === operation.group) {
        count++;
      }

      if (count > 1) {
        return [
          {
            message: `Another operation within the group ${operation.group} already contains the name ${operation.name}.`
          }
        ]
      }
    }

    return;
  }
}





