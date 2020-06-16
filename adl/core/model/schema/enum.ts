import { isAnonymous } from '@azure-tools/sourcemap';
import { EnumDeclaration, EnumMember } from 'ts-morph';
import { literal, normalizeIdentifier } from '../../support/codegen';
import { createDocs } from '../../support/doc-tag';
import { ApiModel } from '../api-model';
import { Collection, Identity } from '../types';
import { NamedElement } from '../typescript/named-element';
import { SchemaInitializer } from '../typescript/schema';
import { TypeReference } from './type';

export interface EnumInitializer extends SchemaInitializer {
  extensible?: boolean;
  readonly values: Collection<EnumValue>;
}

export interface EnumValue {
  name?: string;
  description?: string;
  value: any;
}

export function createEnum(api: ApiModel, identity: Identity, values: Array<EnumValue>, initializer?: Partial<EnumInitializer>): TypeReference {
  if (!isAnonymous(identity)) {
    const { name, file } = api.getNameAndFile(identity, 'enum');

    const existing = api.getEnum(name);
    if (existing) {
      // enums are a bit funny -- they can define their name inside the x-ms-enum declaration 
      // which means there can be multiple declarations for the same enum 
      // so, we just return the existing enum by name 
      return {
        declaration: existing.getName(),
        sourceFile: file,
        requiredReferences: [],
      };
    }


    // create the definition all at once.
    const type = file.addEnum({
      name,
      isExported: true,
      members: values.map(value => ({
        name: value.name || normalizeIdentifier(value.value),
        value: typeof value.value !== 'string' && typeof value.value !== 'number' ?
          `/* ${typeof value.value} */${value.value}` :  // TODO: how would we represent enum of non-string, non-number?
          value.value,
        docs: createDocs(value)
      })),
      docs: createDocs(initializer)
    });

    // return the reference to this enum 
    return {
      declaration: name,
      sourceFile: file,
      requiredReferences: []
    };
  }

  // anonymous enums are far simpler, since they are purely inline information
  return {
    declaration: values.map(v => literal(v.value)).join(' | '),
    requiredReferences: [],
  };
}

export class EnumElement extends NamedElement<EnumMember> {
  constructor(node: EnumMember) {
    super(node);
  }
}

export class EnumType extends NamedElement<EnumDeclaration> implements TypeReference {
  readonly isInline = false;
  readonly requiredReferences = [];

  constructor(node: EnumDeclaration) {
    super(node);
  }

  get declaration() {
    return this.node.getName();
  }

  get values(): Array<EnumElement> {
    return this.node.getMembers().map(each => new EnumElement(each));
  }

  createValue() {
    // shh
  }


}
