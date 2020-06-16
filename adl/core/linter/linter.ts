import { EventEmitter } from "ee-ts";
import { ApiModel, Files } from "../model/api-model";
import { Operation, OperationGroup, ParameterElement, ResponseCollection, ResponseElement, ResultElement } from "../model/operation";
import { ModelType } from "../model/schema/model";
import { AliasType, EnumElement, EnumType, PropertyElement } from "../model/schema/schemas";
import { Declaration } from "../model/typescript/reference";
import { RuleResult } from "./rule";

interface Events {
  aliasType(model: ApiModel, aliasType: AliasType): Array<RuleResult> | undefined;
  declaredResponseCollections(model: ApiModel, reponseCollection: Declaration<ResponseCollection>): Array<RuleResult> | undefined;
  declaredResponses(model: ApiModel, response: Declaration<ResponseElement>): Array<RuleResult> | undefined;
  declaredResults(model: ApiModel, result: Declaration<ResultElement>): Array<RuleResult> | undefined;
  declaredParameters(model: ApiModel, parameter: Declaration<ParameterElement>): Array<RuleResult> | undefined;
  enumType(model: ApiModel, enumType: EnumType): Array<RuleResult> | undefined;
  enumValue(model: ApiModel, enumValue: EnumElement): Array<RuleResult> | undefined;
  modelType(model: ApiModel, modelType: ModelType): Array<RuleResult> | undefined;
  operationGroup(model: ApiModel, operationGroup: OperationGroup): Array<RuleResult> | undefined;
  operation(model: ApiModel, operation: Operation): Array<RuleResult> | undefined;
  property(model: ApiModel, property: PropertyElement): Array<RuleResult> | undefined;
  parameter(model: ApiModel, parameter: ParameterElement): Array<RuleResult> | undefined;
}

export class Linter extends EventEmitter<Events> {
  *run(files: Files) {
    const model = files.api;

    // aliasTypes
    for (const aliasType of files.aliasTypes) {
      yield this.emit('aliasType', model, aliasType);
    }

    // globally declared stuff
    for (const responseCollection of files.responseCollections) {
      yield this.emit('declaredResponseCollections', model, responseCollection);
    }

    for (const response of files.responses) {
      yield this.emit('declaredResponses', model, response);
    }

    for (const result of files.results) {
      yield this.emit('declaredResults', model, result);
    }

    for (const parameter of files.parameters) {
      yield this.emit('declaredParameters', model, parameter);
    }

    for (const responseCollection of files.responseCollections) {
      yield this.emit('declaredResponseCollections', model, responseCollection);
    }

    for (const responseCollection of files.responseCollections) {
      yield this.emit('declaredResponseCollections', model, responseCollection);
    }

    // enumTypes and values
    for (const enumType of files.enumTypes) {
      yield this.emit('enumType', model, enumType);
      for (const value of enumType.values) {
        yield this.emit('enumValue', model, value);
      }
    }

    // modelTypes and properties
    for (const modelType of files.modelTypes) {
      yield this.emit('modelType', model, modelType);
      for (const property of modelType.getProperties()) {
        yield this.emit('property', model, property);
      }
    }

    // operationGroups, operations, parameters
    for (const group of files.operationGroups) {
      yield this.emit('operationGroup', model, group);
      for (const operation of group.operations) {
        yield this.emit('operation', model, operation);
        for (const parameter of operation.parameters) {
          yield this.emit('parameter', model, parameter);
        }
      }
    }
  }
}