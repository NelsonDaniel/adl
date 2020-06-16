import { TypeReference } from './type';

export function createDictionary(elementTypeReference: TypeReference): TypeReference {
  return {
    declaration: `Dictionary<${elementTypeReference.declaration}>`,
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export function createArray(elementTypeReference: TypeReference): TypeReference {
  return {
    declaration: `Array<${elementTypeReference.declaration}>`,
    requiredReferences: [...elementTypeReference.requiredReferences, elementTypeReference],
  };
}

export function createPrimitiveType(declaration: string) {
  return {
    declaration: declaration,
    requiredReferences: []
  };
}

export const Primitives = {
  any: createPrimitiveType('any'),
  string: createPrimitiveType('string'),
  char: createPrimitiveType('char'),
  byte: createPrimitiveType('byte'),
  int16: createPrimitiveType('int16'),
  int32: createPrimitiveType('int32'),
  int64: createPrimitiveType('int64'),
  boolean: createPrimitiveType('boolean'),
  double: createPrimitiveType('double'),
  float: createPrimitiveType('float'),
  byteArray: createPrimitiveType('Array<byte>'),
  date: createPrimitiveType('date'),
  time: createPrimitiveType('time'),
  unixtime: createPrimitiveType('unixtime'),
  dateTime: createPrimitiveType('dateTime'),
  duration: createPrimitiveType('duration'),
  uuid: createPrimitiveType('uuid'),
  uri: createPrimitiveType('uri'),
  password: createPrimitiveType('password'),
  odata: createPrimitiveType('odata'),
  file: createPrimitiveType('file'),
};