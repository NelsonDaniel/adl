import { EventEmitter } from "ee-ts";
import { Alias } from "../model/alias";
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
  operation(model: ApiModel, operation: Operation | Alias<Operation>): void;
  property(model: ApiModel, property: Property): void;
  parameter(model: ApiModel, parameter: Parameter | Alias<Parameter>): void;
  response(model: ApiModel, response: Response | Alias<Response>): void;
}

export class Linter extends EventEmitter<Events> {
  run(model: ApiModel) {
    // visit enums
    for (const each of model.schemas.enums) {
      this.emit('enum', model, each);
    }

    // visit objects
    for (const object of model.schemas.objects) {
      this.emit('object', model, object);

      // visit properties
      for (const property of object.properties.get()) {
        this.emit('property', model, property);
      }
    }

    // visit combination
    for (const combination of model.schemas.combinations) {
      this.emit('combination', model, combination);
    }

    // visit operations
    for (const operation of model.http.operations) {
      this.emit('operation', model, operation);
    }

    for (const parameter of model.http.parameters) {
      this.emit('parameter', model, parameter);
    }

    for (const response of model.http.responses) {
      this.emit('response', model, response);
    }
  }
}