import { Term, VariableTerm } from './Term';
import { Predicate } from './Predicate';

export type AtomicFormula = Readonly<{
  formulaType: 'atomic';
  predicate: Predicate;
  terms: readonly Term[];
}>;

export type UnaryOperator = '¬';

export type UnaryFormula = Readonly<{
  formulaType: 'unary';
  operator: UnaryOperator;
  formula: Formula;
}>;

export type BinaryOperator = '∧' | '∨' | '→' | '↔';

export type BinaryFormula = Readonly<{
  formulaType: 'binary';
  operator: BinaryOperator; 
  formula1: Formula;
  formula2: Formula;
}>;

export type Quantifier = '∀' | '∃';

export type QuantifiedFormula = Readonly<{
  formulaType: 'quantified';
  quantifier: Quantifier;
  variable: VariableTerm;
  formula: Formula; // must contain `variable` but not a quantified formula of `variable`
}>;

export type Formula
  = AtomicFormula
  | UnaryFormula
  | BinaryFormula
  | QuantifiedFormula
  ;
