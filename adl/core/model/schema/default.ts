import { TypeReference } from './type';

export function addDefault(type: TypeReference, defaultValue: any): TypeReference {
  return {
    ...type,
    declaration: `${type.declaration} /* todo: add defaultValue '${JSON.stringify(defaultValue) }' */`
  };

}
