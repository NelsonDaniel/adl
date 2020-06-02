import { ApiModel } from "../model/api-model";
import { Operation } from "../model/http/operation";
import { Parameter } from "../model/http/parameter";
import { Response } from "../model/http/response";
import { Enum } from "../model/schema/enum";
import { ObjectSchema, Property } from "../model/schema/object";

export interface Rule {
  runOn: "edit" | "onDemand";
  meta: RuleMetaData;
  onEnum?: (model: ApiModel, e: Enum) => RuleResult | void;
  onObject?: (model: ApiModel, object: ObjectSchema) => RuleResult | void;
  onProperty?: (cmodel: ApiModel, property: Property) => RuleResult | void;
  onOperation?: (model: ApiModel, operation: Operation) => RuleResult | void;
  onParameter?: (model: ApiModel, parameter: Parameter) => RuleResult | void;
  onResponse?: (model: ApiModel, response: Response) => RuleResult | void;
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
