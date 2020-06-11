import { Identity } from '../types';
import { Schema } from './schema';
import { TypeReference } from './type';


export class Default extends Schema {
  constructor(public name: Identity, initializer?: Partial<Default>) {
    super('default');
    this.initialize(initializer);
  }
}

export class ServerDefaultValue extends Schema {
  constructor(public value: any, initializer?: Partial<ServerDefaultValue>) {
    super('server-default');
    this.initialize(initializer);
  }
}

export function addDefault(type: TypeReference, defaultValue: any): TypeReference {
  return {
    ...type,
    declaration: `${type.declaration} /* todo: add defaultValue '${JSON.stringify(defaultValue) }' */`
  };

}
