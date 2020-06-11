export type LogPatternName = string & MaxLength<50> & MinLength<1> & RegularExpression<'[a-zA-Z0-9\.\-_]*'>;
