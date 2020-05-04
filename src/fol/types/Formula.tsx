import { Term, VariableTerm } from './Term';
import { Predicate } from './Predicate';

export type PredicateFormula = Readonly<{
  formulaType: 'predicate';
  predicate: Predicate;
  terms: readonly Term[];
}>;

export type EqualityFormula = Readonly<{
  formulaType: 'equality';
  term1: Term;
  term2: Term;
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

export type FalseFormula = Readonly<{
  formulaType: 'false';
}>;

export type Formula
  = PredicateFormula
  | EqualityFormula
  | UnaryFormula
  | BinaryFormula
  | QuantifiedFormula
  | FalseFormula
  ;
