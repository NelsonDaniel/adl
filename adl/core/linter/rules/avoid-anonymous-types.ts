// Need: I would like to be able to extract the definition, so it can be rehused.
// Also, I would like to detect similar defintions to this and make those rehuse this newly defined type.

import { Rule } from "../rule";
export default <Rule>{
  runOn: "edit",
  meta: {
    name: "avoid-anonymous-types",
    code: "R2056",
    type: "error",
    description: "Inline/anonymous models must not be used, instead define a schema. This allows operations to share the models.",
    documentationUrl: "https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r2026-avoidanonymoustypes",
    category: "SDK Error"
  },
  onProperty: (model, property) => {
    //  const t = property.type;
    //  if (isInterface(t) && isInline(t)) {
    //  create a new model based on the inline definition
    //  replace the inline defintion with the type reference
    // 
    //   return [
    //     {
    //       message: "Extract contents and create a model definition for this type.",
    //       fix: () => {
    //          const tref = createInterface(model, getUniqueName(property.name), {declaration: t.declaration});
    //          property.type = tref;
    //          figure out position
    //          emit('new-type-created', position);
    //       }
    //     }
    //   ]
    // }
    // 
    // return;
    //
    // how do they trigger events when there is a physical file change.
  }
}
