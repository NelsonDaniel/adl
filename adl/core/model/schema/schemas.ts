import { Element } from '../element';
import { Alias } from './alias';
import { Constant } from './constant';
import { Constraint } from './constraint';
import { Default } from './default';
import { Enum } from './enum';
import { AndSchema, AnyOfSchema, XorSchema } from './group';
import { ObjectSchemaImpl } from './object';
import { AnySchema, BooleanPrimitive, ByteArrayPrimitive, CharPrimitive, DatePrimitive, DateTimePrimitive, DoublePrimitive, DurationPrimitive, FilePrimitive, FloatPrimitive, Int32Primitive, Int64Primitive, ODataPrimitive, PasswordPrimitive, Primitive, StringPrimitive, TimePrimitive, UnixTimePrimitive, UnknownSchema, UriPrimitive, UuidPrimitive } from './primitive';

export class Schemas extends Element {
  addPrimitive<T extends Primitive>(primitive: T): T {
    this.primitives.push(primitive);
    return primitive;
  }
  #unknown?: UnknownSchema;
  #any?: AnySchema;
  #string?: StringPrimitive;
  #char?: CharPrimitive;
  #int32?: Int32Primitive;
  #int64?: Int64Primitive;
  #boolean?: BooleanPrimitive;
  #double?: DoublePrimitive;
  #float?: FloatPrimitive;
  #byteArray?: ByteArrayPrimitive;
  #date?: DatePrimitive;
  #time?: TimePrimitive;
  #unixtime?: UnixTimePrimitive;
  #dateTime?: DateTimePrimitive;
  #duration?: DurationPrimitive;
  #uuid?: UuidPrimitive;
  #uri?: UriPrimitive;
  #password?: PasswordPrimitive;
  #odata?: ODataPrimitive;
  #file?: FilePrimitive;

  get Unknown(): UnknownSchema {
    return this.#unknown || (this.addPrimitive(this.#unknown = new UnknownSchema()));
  }
  get Any(): AnySchema {
    return this.#any || (this.addPrimitive(this.#any = new AnySchema()));
  }
  get String(): StringPrimitive {
    return this.#string || (this.addPrimitive(this.#string = new StringPrimitive()));
  }
  get Char(): CharPrimitive {
    return this.#char || (this.addPrimitive(this.#char = new CharPrimitive()));
  }
  get Int32(): Int32Primitive {
    return this.#int32 || (this.addPrimitive(this.#int32 = new Int32Primitive()));
  }
  get Int64(): Int64Primitive {
    return this.#int64 || (this.addPrimitive(this.#int64 = new Int64Primitive()));
  }
  get Boolean(): BooleanPrimitive {
    return this.#boolean || (this.addPrimitive(this.#boolean = new BooleanPrimitive()));
  }
  get Double(): DoublePrimitive {
    return this.#double || (this.addPrimitive(this.#double = new DoublePrimitive()));
  }
  get Float(): FloatPrimitive {
    return this.#float || (this.addPrimitive(this.#float = new FloatPrimitive()));
  }
  get ByteArray(): ByteArrayPrimitive {
    return this.#byteArray || (this.addPrimitive(this.#byteArray = new ByteArrayPrimitive()));
  }
  get Date(): DatePrimitive {
    return this.#date || (this.addPrimitive(this.#date = new DatePrimitive()));
  }
  get Time(): TimePrimitive {
    return this.#time || (this.addPrimitive(this.#time = new TimePrimitive()));
  }
  get UnixTime(): TimePrimitive {
    return this.#unixtime || (this.addPrimitive(this.#unixtime = new UnixTimePrimitive()));
  }
  get DateTime(): DateTimePrimitive {
    return this.#dateTime || (this.addPrimitive(this.#dateTime = new DateTimePrimitive()));
  }
  get Duration(): DurationPrimitive {
    return this.#duration || (this.addPrimitive(this.#duration = new DurationPrimitive()));
  }
  get Uuid(): UuidPrimitive {
    return this.#uuid || (this.addPrimitive(this.#uuid = new UuidPrimitive()));
  }
  get Uri(): UriPrimitive {
    return this.#uri || (this.addPrimitive(this.#uri = new UriPrimitive()));
  }
  get Password(): PasswordPrimitive {
    return this.#password || (this.addPrimitive(this.#password = new PasswordPrimitive()));
  }
  get OData(): ODataPrimitive {
    return this.#odata || (this.addPrimitive(this.#odata = new ODataPrimitive()));
  }
  get File(): FilePrimitive {
    return this.#file || (this.addPrimitive(this.#file = new FilePrimitive()));
  }

  objects = new Array<ObjectSchemaImpl>();
  combinations = new Array<Combination>();
  constants = new Array<Constant>();
  enums = new Array<Enum>();
  constraints = new Array<Constraint>();
  defaults = new Array<Default>();
  aliases = new Array<Alias>();
  primitives = new Array<Primitive>();

}

export type Combination = AndSchema | XorSchema | AnyOfSchema;
