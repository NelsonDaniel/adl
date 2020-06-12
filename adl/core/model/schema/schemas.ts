import { EnumDeclaration, EnumMember, InterfaceDeclaration, PropertySignature, TypeAliasDeclaration } from 'ts-morph';
import { ApiModel } from '../api-model';
import { Element } from '../element';
import { NamedElement } from '../typescript/named-element';
import { AndSchema, AnyOfSchema, XorSchema } from './group';
import { TypeReference } from './type';

export interface RemovableNode {
  /** Removes the Node. */
  remove(): void;
}

function createPrimitiveSchema(declaration: string) {
  return {
    declaration: declaration,
    requiredReferences: []
  };
}


export class PropertyElement extends NamedElement<PropertySignature> {
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

export class AliasType extends NamedElement<TypeAliasDeclaration> implements TypeReference {
  declaration!: string;
  requiredReferences = [];

  isInline?: boolean;

  constructor(node: TypeAliasDeclaration) {
    super(node);
  }
}

export class InterfaceType extends NamedElement<InterfaceDeclaration> implements TypeReference {
  readonly isInline = false;
  readonly requiredReferences = [];

  constructor(node: InterfaceDeclaration) {
    super(node);
  }
  get declaration() {
    return this.node.getName();
  }

  getProperties(): Iterable<PropertyElement> {
    return this.node.getProperties().map(each => new PropertyElement(each));
  }

  createProperty(name: string) {
    //ssh
  }

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

export class Schemas extends Element {
  primitives = {
    any: createPrimitiveSchema('any'),
    string: createPrimitiveSchema('string'),
    char: createPrimitiveSchema('char'),
    byte: createPrimitiveSchema('byte'),
    int16: createPrimitiveSchema('int16'),
    int32: createPrimitiveSchema('int32'),
    int64: createPrimitiveSchema('int64'),
    boolean: createPrimitiveSchema('boolean'),
    double: createPrimitiveSchema('double'),
    float: createPrimitiveSchema('float'),
    byteArray: createPrimitiveSchema('Array<byte>'),
    date: createPrimitiveSchema('date'),
    time: createPrimitiveSchema('time'),
    unixtime: createPrimitiveSchema('unixtime'),
    dateTime: createPrimitiveSchema('dateTime'),
    duration: createPrimitiveSchema('duration'),
    uuid: createPrimitiveSchema('uuid'),
    uri: createPrimitiveSchema('uri'),
    password: createPrimitiveSchema('password'),
    odata: createPrimitiveSchema('odata'),
    file: createPrimitiveSchema('file'),
  }

  constructor(protected apiModel: ApiModel) {
    super();
  }
}

export type Combination = AndSchema | XorSchema | AnyOfSchema;
