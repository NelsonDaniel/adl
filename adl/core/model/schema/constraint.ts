import { TypeReference } from './type';


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

