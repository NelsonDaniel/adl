import { Element } from '../element';
import { Alias } from './alias';
import { Constant } from './constant';
import { Constraint } from './constraint';
import { Default } from './default';
import { Enum } from './enum';
import { AndSchema, AnyOfSchema, XorSchema } from './group';
import { ObjectSchemaImpl } from './object';

function createPrimitiveSchema( declaration: string ) {
  return {
    declaration: declaration,
    requiredReferences: []
  };
}

export class Schemas extends Element {
  primitives= {
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
  
  objects = new Array<ObjectSchemaImpl>();
  combinations = new Array<Combination>();
  constants = new Array<Constant>();
  enums = new Array<Enum>();
  constraints = new Array<Constraint>();
  defaults = new Array<Default>();
  aliases = new Array<Alias>();
  

}

export type Combination = AndSchema | XorSchema | AnyOfSchema;
