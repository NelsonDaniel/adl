import { EventEmitter } from "ee-ts";
import { ApiModel, Files } from "../model/api-model";
import { Operation, OperationGroup, ParameterElement, Reference, ResponseElement } from "../model/operation";
import { EnumElement, EnumType, InterfaceType, PropertyElement } from "../model/schema/schemas";
import { RuleResult } from "./rule";

interface Events {
  enum(model: ApiModel, e: EnumType): Array<RuleResult> | undefined;
  object(model: ApiModel, object: InterfaceType): Array<RuleResult> | undefined;
  operation(model: ApiModel, operation: Operation): Array<RuleResult> | undefined;
  operationGroup(model: ApiModel, operationGroup: OperationGroup): Array<RuleResult> | undefined;
  enumValue(model: ApiModel, enumValue: EnumElement): Array<RuleResult> | undefined;
  property(model: ApiModel, property: PropertyElement): Array<RuleResult> | undefined;
  parameter(model: ApiModel, parameter: ParameterElement): Array<RuleResult> | undefined;
  response(model: ApiModel, response: ResponseElement | Reference<ResponseElement>): Array<RuleResult> | undefined;
}

export class Linter extends EventEmitter<Events> {
  *run(files: Files) {
    const model = files.api;
    for (const group of files.operationGroups) {
      yield this.emit('operationGroup', model, group);
      for (const operation of group.operations) {
        yield this.emit('operation', model, operation);
        for (const parameter of operation.parameters) {
          yield this.emit('parameter', model, parameter);
        }
      }
    }

    for (const e of files.enums) {
      yield this.emit('enum', model, e);
      for (const value of e.values) {
        yield this.emit('enumValue', model, value);
      }
    }

    for (const object of files.interfaces) {
      yield this.emit('object', model, object);
      for (const property of object.getProperties()) {
        yield this.emit('property', model, property);
      }
    }

    for (const responseCollection of model.responseCollections) {
      for (const response of responseCollection.responses) {
        yield this.emit('response', model, response);
      }
    }
  }
}