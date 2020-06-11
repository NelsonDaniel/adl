export type ResourceGroupName = string & MaxLength<256> & MinLength<1> & RegularExpression<'[a-zA-Z0-9\.\-_]*'>;
