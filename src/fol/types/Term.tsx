export type NameTerm = Readonly<{
  termType: 'name';
  symbol: string;
}>;

export type VariableTerm = Readonly<{
  termType: 'variable';
  symbol: string;
}>;

export type Term = NameTerm | VariableTerm;
