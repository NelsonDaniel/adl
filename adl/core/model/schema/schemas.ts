import { linq } from '@azure-tools/linq';
import { EnumDeclaration, InterfaceDeclaration, Node, PropertySignature } from 'ts-morph';
import { ApiModel } from '../api-model';
import { Element } from '../element';
import { AndSchema, AnyOfSchema, XorSchema } from './group';
import { TypeReference } from './type';

function createPrimitiveSchema(declaration: string) {
  return {
    declaration: declaration,
    requiredReferences: []
  };
}

export interface Model extends TypeReference {

}

export class NewElement {
  constructor(protected node: Node) {
  }
}

export class PropertyElement extends NewElement {
  constructor(protected node: PropertySignature) {
    super(node);
  }

  get type(): Model {

    return <TypeReference><any>{};
  }

  set type(typeReference: Model) {

  }
}

export class InterfaceModel extends NewElement {
  constructor(protected node: InterfaceDeclaration) {
    super(node);
  }

  getProperties(): Iterable<PropertyElement> {
    return this.node.getProperties().map(each => new PropertyElement(each));
  }

  removeProperty(name: string) {

  }

  createProperty(name: string) {

  }
}

export class EnumModel extends NewElement {
  constructor(protected node: EnumDeclaration) {
    super(node);
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

  *getInterfaces(): Iterable<InterfaceModel> {
    for (const iface of linq.values(this.apiModel.project.getSourceFiles()).selectMany(file => file.getInterfaces())) {
      yield new InterfaceModel(iface);
    }
  }

  *getEnums(): Iterable<EnumModel> {
    for (const enm of linq.values(this.apiModel.project.getSourceFiles()).selectMany(file => file.getEnums())) {
      yield new EnumModel(enm);
    }
  }
}

export type Combination = AndSchema | XorSchema | AnyOfSchema;
