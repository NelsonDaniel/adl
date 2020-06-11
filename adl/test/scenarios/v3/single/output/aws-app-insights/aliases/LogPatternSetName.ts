export type LogPatternSetName = string & MaxLength<30> & MinLength<1> & RegularExpression<'[a-zA-Z0-9\.\-_]*'>;
