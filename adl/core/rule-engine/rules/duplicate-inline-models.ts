import { Rule } from "../rule";
export default <Rule>{
  runOn: "onDemand",
  meta: {
    name: "duplicate-inline-models",
    code: "PLACEHOLDER",
    type: "warning",
    description: "Inline/anonymous models must not be used, instead define a schema. This allows operations to share the models",
    documentationUrl: "PLACEHOLDER",
    category: "SDK Warning"
  },
  onObject: (context, object) => {
    // Find all inline duplicate objects and extract them, then prompt user to put them a name.
    // maybe walk through the ones that should be extracted...
  }
}
