import { ParameterDeclaration, PropertyDeclaration } from 'ts-morph';
import { stringLiteral } from '../../support/codegen';
import { Identity } from '../types';
import { Schema } from './schema';
import { TypeReference } from './type';


export class Constraint extends Schema {
  constructor(public name: Identity, initializer?: Partial<Constraint>) {
    super('constraint');
    this.initialize(initializer);
  }
}

export class MinimumConstraint extends Constraint {
  constructor(public minimum: number, initializer?: Partial<MinimumConstraint>) {
    super('Minimum');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `Minimum<${this.minimum}>`;
  }

}

export class MaximumConstraint extends Constraint {
  constructor(public maximum: number, initializer?: Partial<MaximumConstraint>) {
    super('Maximum');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `Maximum<${this.maximum}>`;
  }
}
export class ExclusiveMinimumConstraint extends Constraint {
  constructor(public minimum: number, initializer?: Partial<ExclusiveMinimumConstraint>) {
    super('ExclusiveMinimum');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `ExclusiveMinimum<${this.minimum}>`;
  }
}
export class ExclusiveMaximumConstraint extends Constraint {
  constructor(public maximum: number, initializer?: Partial<ExclusiveMaximumConstraint>) {
    super('ExclusiveMaximum');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `ExclusiveMaximum<${this.maximum}>`;
  }
}

export class MultipleOfConstraint extends Constraint {
  constructor(public multipleOf: number, initializer?: Partial<MultipleOfConstraint>) {
    super('MultipleOf');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MultipleOf<${this.multipleOf}>`;
  }
}


export class MaxLengthConstraint extends Constraint {
  constructor(public length: number, initializer?: Partial<MaxLengthConstraint>) {
    super('MaxLength');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MaxLength<${this.length}>`;
  }
}
export class MinLengthConstraint extends Constraint {
  constructor(public length: number, initializer?: Partial<MinLengthConstraint>) {
    super('MinLength');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MinLength<${this.length}>`;
  }
}

export class RegularExpressionConstraint extends Constraint {
  constructor(public expression: string, initializer?: Partial<RegularExpressionConstraint>) {
    super('RegularExpression');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `RegularExpression<${stringLiteral(this.expression)}'>`;
  }
}

export class MaximumElementsConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MaximumElementsConstraint>) {
    super('MaximumElements');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MaximumElements<${this.count}>`;
  }
}


export class MinimumElementsConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MinimumElementsConstraint>) {
    super('MinimumElements');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MinimumElements<${this.count}>`;
  }
}

export class UniqueElementsConstraint extends Constraint {
  constructor(public unique: boolean, initializer?: Partial<UniqueElementsConstraint>) {
    super('UniqueElements');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return 'UniqueElements';
  }
}

export class MinimumPropertiesConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MinimumPropertiesConstraint>) {
    super('MinimumProperties');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MinimumProperties<${this.count}>`;
  }
}

export class MaximumPropertiesConstraint extends Constraint {
  constructor(public count: number, initializer?: Partial<MaximumPropertiesConstraint>) {
    super('MaximumProperties');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `MaximumProperties<${this.count}>`;
  }
}

export class Modifier extends Constraint {
  constructor(initializer?: Partial<NullableModifier>) {
    super('modifier');
    this.initialize(initializer);
  }
  get typeDefinition() {
    return `/* modifier ${Object.getPrototypeOf(this).constructor.name} */`;
  }
}

export class ReadOnlyModifier extends Modifier {
  constructor( initializer?: Partial<ReadOnlyModifier>) {
    super();
    this.initialize(initializer);
  }
  isEnabled(target: PropertyDeclaration | ParameterDeclaration) {
    return target.isReadonly;
  }
  enable(target: PropertyDeclaration|ParameterDeclaration) {
    target.setIsReadonly(true);
  }
  disable(target: PropertyDeclaration | ParameterDeclaration) {
    target.setIsReadonly(false);
  }
}


export class RequiredModifier extends Modifier {
  constructor(initializer?: Partial<ReadOnlyModifier>) {
    super();
    this.initialize(initializer);
  }
  isEnabled(target: PropertyDeclaration | ParameterDeclaration) {
    return target.hasQuestionToken;
  }
  enable(target: PropertyDeclaration | ParameterDeclaration) {
    target.setHasQuestionToken(true);
  }
  disable(target: PropertyDeclaration | ParameterDeclaration) {
    target.setHasQuestionToken(false);
  }
}

export class NullableModifier extends Modifier {
  constructor( initializer?: Partial<NullableModifier>) {
    super();
    this.initialize(initializer);
  }
  isEnabled(target: PropertyDeclaration | ParameterDeclaration) {
    // todo: tear apart target type, see if '| null' is part of the union
    return false;
  }
  enable(target: PropertyDeclaration | ParameterDeclaration) {
    // todo: tear apart target type, see if '| null' is part of the union, add it if it's not
  }
  disable(target: PropertyDeclaration | ParameterDeclaration) {
    // todo: tear apart target type, see if '| null' is part of the union, remove it if it is
  }
}

export interface ConstraintReference  {
  implementation: string;
}

function createConstraint( constraintName: string, ... parameters: Array<string|number>  ): ConstraintReference {
  return { 
    implementation: parameters.length ?   `${constraintName}<${parameters.map( each => typeof each === 'string' ? `'${each}'` : each ).join(',')}>` :  constraintName
  };
}

export const Constraints = {
  maximumProperties: (count: number)=>  createConstraint('MaximumProperties',count),
  minimumProperties: (count: number) => createConstraint('MinimumProperties', count),

  minimum : (count: number) => createConstraint('Minimum', count),
  maximum : (count: number) => createConstraint('Maximum', count),
  exclusiveMinimum : (count: number) => createConstraint('ExclusiveMinimum', count),
  exclusiveMaximum : (count: number) => createConstraint('ExclusiveMaximum', count),
  multipleOf : (count: number) => createConstraint('MultipleOf', count),
  maxLength : (count: number) => createConstraint('MaxLength', count),
  minLength : (count: number) => createConstraint('MinLength', count),
  regularExpression : (regEx: string) => createConstraint('RegularExpression', regEx),
  maximumElements : (count: number) => createConstraint('MaximumElements', count),
  minimumElements : (count: number) => createConstraint('MinimumElements', count),
  uniqueElements : () => createConstraint('UniqueElements'),

};

export function addConstraint( type: TypeReference, constraint: ConstraintReference): TypeReference {
  return {
    ... type,
    declaration: `${type.declaration} & ${constraint.implementation}`
  };
}

export interface EncodingReference {
  implementation: string;
}

export const Encodings= {
  UrlEncoding: { implementation: 'UrlEncoding' },
  RFC1123: { implementation: 'RFC1123' },
  
};

export function addEncoding(type: TypeReference, encoding: EncodingReference): TypeReference {
  return {
    ...type,
    declaration: `${type.declaration} & ${encoding.implementation}`
  };
}
