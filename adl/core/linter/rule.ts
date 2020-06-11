import { ApiModel } from "../model/api-model";
import { Operation } from "../model/http/operation";
import { Parameter } from "../model/http/parameter";
import { Response } from "../model/http/response";
import { Enum } from "../model/schema/enum";
import { ObjectSchema, Property } from "../model/schema/object";

export interface Rule {
  runOn: "edit" | "onDemand";
  meta: RuleMetaData;
  onEnum?: (model: ApiModel, e: Enum) => Array<RuleResult> | undefined;
  onObject?: (model: ApiModel, object: ObjectSchema) => Array<RuleResult> | undefined;
  onProperty?: (model: ApiModel, property: Property) => Array<RuleResult> | undefined;
  onOperation?: (model: ApiModel, operation: Operation) => Array<RuleResult> | undefined;
  onParameter?: (model: ApiModel, parameter: Parameter) => Array<RuleResult> | undefined;
  onResponse?: (model: ApiModel, response: Response) => Array<RuleResult> | undefined;
}

export interface RuleMetaData {
  // The name of the rule
  name: string;

  // The rule type. 
  type: "error" | "warning";

  code: string;

  // Description of what the rule does 
  description: string;

  // Additional documntation for the rule can be found at the url
  documentationUrl?: string;

  // The rule category. 
  // There could be cosmetic warnings (e.g. names) 
  // or best practices warnings  (e.g. including description)
  category?: string;
}


export interface RuleResult {
  message?: string;
  suggestion: Array<Fix>;
}

export interface Fix {
  description?: string
  fix: () => void;
}