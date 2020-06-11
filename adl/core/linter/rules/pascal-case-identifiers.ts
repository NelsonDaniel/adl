import { Rule } from "../rule";
import { getPascalIdentifier } from "../utils";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "pascal-case-identifiers",
    code: "PLACEHOLDER",
    type: "warning",
    description: "PLACEHOLDER",
    documentationUrl: "PLACEHOLDER",
    category: "SDK Warning"
  },
  onObject: (model, object) => {
    const name = object.name.toString();
    if (name.match(pascalCaseRegex)) {
      return [
        {
          message: `The operation ${name} must follow pascal case style.`,
          fix: () => {
            object.name = getPascalIdentifier(name);
          }
        }
      ]
    }

    return;
  },
  onEnum: (model, e) => {
    const name = e.name.toString();
    if (name.match(pascalCaseRegex)) {
      return [
        {
          message: `The operation ${name} must follow pascal case style.`,
          fix: () => {
            e.name = getPascalIdentifier(name);
          }
        }
      ]
    }

    return;
  },
  onOperation: (model, operation) => {
    const name = operation.name.toString();
    if (name.match(pascalCaseRegex)) {
      return [
        {
          message: `The operation ${name} must follow pascal case style.`,
          fix: () => {
            operation.name = getPascalIdentifier(name);
          }
        }
      ]
    }

    return;
  }
}

const pascalCaseRegex = /^[A-Z][a-z0-9]+\.([A-Z]+[a-z0-9]+)+$/g
