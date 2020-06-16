import { TypeReference } from './type';

export interface EncodingReference {
  implementation: string;
}
export const Encodings = {
  UrlEncoding: { implementation: 'UrlEncoding' },
  RFC1123: { implementation: 'RFC1123' },

};

export function addEncoding(type: TypeReference, encoding: EncodingReference): TypeReference {
  return {
    ...type,
    declaration: `${type.declaration} & ${encoding.implementation}`
  };
}
