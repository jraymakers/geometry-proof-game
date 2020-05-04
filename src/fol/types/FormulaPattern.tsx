import { UnaryOperator, BinaryOperator, Quantifier } from './Formula';

export type ConstantTermPattern = Readonly<{
  termType: 'constant';
  variableId: string;
}>;

export type VariableTermPattern = Readonly<{
  termType: 'variable';
  variableId: string;
}>;

export type TermPattern = ConstantTermPattern | VariableTermPattern;

export type EqualityFormulaPattern = Readonly<{
  formulaType: 'equality';
  term1: TermPattern;
  term2: TermPattern;
}>;

export type UnaryFormulaPattern = Readonly<{
  formulaType: 'unary';
  operator: UnaryOperator;
  formula: FormulaPattern;
}>;

export type BinaryFormulaPattern = Readonly<{
  formulaType: 'binary';
  operator: BinaryOperator; 
  formula1: FormulaPattern;
  formula2: FormulaPattern;
}>;

export type QuantifiedFormulaPattern = Readonly<{
  formulaType: 'quantified';
  quantifier: Quantifier;
  variable: VariableTermPattern;
  formula: FormulaPattern; // must contain `variable` but not a quantified formula of `variable`
}>;

export type FalseFormulaPattern = Readonly<{
  formulaType: 'false';
}>;

export type FormulaPattern
  = EqualityFormulaPattern
  | UnaryFormulaPattern
  | BinaryFormulaPattern
  | QuantifiedFormulaPattern
  | FalseFormulaPattern
  ;
