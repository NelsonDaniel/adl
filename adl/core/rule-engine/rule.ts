import { Operation } from "../model/http/operation";
import { Parameter } from "../model/http/parameter";
import { Enum } from "../model/schema/enum";
import { ObjectSchema, Property } from "../model/schema/object";
import { LinterContext } from "./linter-context";

export interface Rule {
  runOn: "edit" | "onDemand";
  meta: RuleMetaData;
  onEnum?: (context: LinterContext, e: Enum) => RuleResult | void;
  onObject?: (context: LinterContext, object: ObjectSchema) => RuleResult | void;
  onProperty?: (context: LinterContext, property: Property) => RuleResult | void;
  onOperation?: (context: LinterContext, operation: Operation) => RuleResult | void;
  onParameter?: (context: LinterContext, parameter: Parameter) => RuleResult | void;
  onResponse?: (context: LinterContext) => RuleResult | void;
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
