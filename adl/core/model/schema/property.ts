import { PropertySignature, PropertySignatureStructure, StructureKind } from 'ts-morph';
import { normalizeIdentifier } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { addNullable } from '../../support/typescript';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { TypeReference } from './type';

export interface PropertyInitializer extends SchemaInitializer {
  required?: boolean;
}

export class Property extends NamedElement<PropertySignature> {
  constructor(node: PropertySignature) {
    super(node);
  }

  get type(): TypeReference {
    return <TypeReference><any>{};
  }

  set type(typeReference: TypeReference) {
    // shh
  }
}

export function createPropertySignature(name: string, typeReference: TypeReference, initializer?: PropertyInitializer): PropertySignatureStructure {
  return {
    kind: StructureKind.PropertySignature,
    //todo: do a better 'fix-the-bad-name' (ie, perks/codegen)
    name: normalizeIdentifier(name),
    type: initializer?.nullable ? addNullable(typeReference.declaration) : typeReference.declaration,
    isReadonly: initializer?.readOnly,
    hasQuestionToken: !(initializer?.required),
    docs: createDocs(initializer),
  };
}
