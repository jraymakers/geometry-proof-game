import { Assertion, AssertionList } from './Assertion';
import { Theorem } from './Theorem';
import { VariableRenameList } from './VariableRename';

export enum JustificationType {
  Assumption = 'Assumption',
  Case = 'Case',
  Contradiction = 'Contradiction',
  Superposition = 'Superposition',
  Supposition = 'Supposition',
  TheoremApplication = 'TheoremApplication',
}

export type BaseJustification<TType extends JustificationType> = Readonly<{
  justificationType: TType;
}>;

export type AssumptionJustification = BaseJustification<JustificationType.Assumption>;

export type CaseJustification = BaseJustification<JustificationType.Case>
& Readonly<{
  supposition: Assertion; // do we need this property?
  positiveCase: Justification; // should contain supposition justified by 'supposition'
  negativeCase: Justification; // should contain negated supposition justified by 'supposition'
}>;

export type ContradictionJustification = BaseJustification<JustificationType.Contradiction>
& Readonly<{
  supposition: Assertion; // proves the negation of this (do we need this property?)

  // should contain supposition justified by 'supposition', and should result in a contradiction
  contradiction: Justification;
}>;

export type SuperpositionJustification = BaseJustification<JustificationType.Superposition>
& Readonly<{
  superpositionType: 'sas' | 'sss';
}>;

export type SuppositionJustification = BaseJustification<JustificationType.Supposition>;

export type TheoremApplicationJustification = BaseJustification<JustificationType.TheoremApplication>
& Readonly<{
  justifiedAssumptions: AssertionList;
  theorem: Theorem;
  renames: VariableRenameList;
}>;

export type Justification
  = AssumptionJustification
  | CaseJustification
  | ContradictionJustification
  | SuperpositionJustification
  | SuppositionJustification
  | TheoremApplicationJustification
  ;
