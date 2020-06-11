import { EventEmitter } from "ee-ts";
import { Alias } from "../model/alias";
import { ApiModel } from "../model/api-model";
import { Operation } from "../model/http/operation";
import { Parameter } from "../model/http/parameter";
import { Response } from "../model/http/response";
import { Enum } from "../model/schema/enum";
import { ObjectSchema, Property } from "../model/schema/object";
import { Combination } from "../model/schema/schemas";
import { RuleResult } from "./rule";

interface Events {
  enum(model: ApiModel, e: Enum): Array<RuleResult> | undefined;
  object(model: ApiModel, object: ObjectSchema): Array<RuleResult> | undefined;
  combination(model: ApiModel, combination: Combination): Array<RuleResult> | undefined;
  operation(model: ApiModel, operation: Operation | Alias<Operation>): Array<RuleResult> | undefined;
  property(model: ApiModel, property: Property): Array<RuleResult> | undefined;
  parameter(model: ApiModel, parameter: Parameter | Alias<Parameter>): Array<RuleResult> | undefined;
  response(model: ApiModel, response: Response | Alias<Response>): Array<RuleResult> | undefined;
}

export class Linter extends EventEmitter<Events> {
  *run(model: ApiModel) {
    // visit enums
    for (const each of model.schemas.enums) {
      yield this.emit('enum', model, each);
    }

    // visit objects
    for (const object of model.schemas.objects) {
      yield this.emit('object', model, object);

      // visit properties
      for (const property of object.properties.get()) {
        yield this.emit('property', model, property);
      }
    }

    // visit combination
    for (const combination of model.schemas.combinations) {
      yield this.emit('combination', model, combination);
    }

    // visit operations
    for (const operation of model.http.operations) {
      yield this.emit('operation', model, operation);
    }

    for (const parameter of model.http.parameters) {
      yield this.emit('parameter', model, parameter);
    }

    for (const response of model.http.responses) {
      yield this.emit('response', model, response);
    }
  }
}