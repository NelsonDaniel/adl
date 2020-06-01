import { ApiModel } from "../model/api-model";

export class LinterContext {
  model: ApiModel;

  constructor(model: ApiModel) {
    this.model = model;
  };
}