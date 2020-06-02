import { EventEmitter } from "ee-ts";
import { ApiModel } from "../model/api-model";
import { Operation } from "../model/http/operation";
import { Parameter } from "../model/http/parameter";
import { Response } from "../model/http/response";
import { Enum } from "../model/schema/enum";
import { ObjectSchema, Property } from "../model/schema/object";
import { Combination } from "../model/schema/schemas";

interface Events {
  enum(model: ApiModel, e: Enum): void;
  object(model: ApiModel, object: ObjectSchema): void;
  combination(model: ApiModel, combination: Combination): void;
  operation(model: ApiModel, operation: Operation): void;
  property(model: ApiModel, property: Property): void;
  parameter(model: ApiModel, parameter: Parameter): void;
  response(model: ApiModel, response: Response): void;
}

export class Linter extends EventEmitter<Events> {
  *run(model: ApiModel) {
    // visit enums
    for (const each of model.schemas.enums) {
      this.emit('enum', model, each);
    }

    // visit object
    for (const each of model.schemas.objects) {
      this.emit('object', model, each);
    }

    // visit combination
    for (const each of model.schemas.combinations) {
      this.emit('combination', model, each);
    }
  }
}

// objects = new Array<ObjectSchemaImpl>();
// combinations = new Array<Combination>();
// constants = new Array<Constant>();
// enums = new Array<Enum>();
// constraints = new Array<Constraint>();
// defaults = new Array<Default>();
// aliases = new Array<Alias>();
// primitives = new Array<Primitive>();