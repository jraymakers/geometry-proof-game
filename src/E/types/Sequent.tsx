import { AssertionList } from './Assertion';
import { GeometricVariable } from './GeometricVariable';

export type Sequent = Readonly<{
  priorSequents: SequentList;
  additionalFreeVariables: readonly GeometricVariable[];
  additionalAntecedents: AssertionList;
  additionalBoundVariables: readonly GeometricVariable[];
  additionalConsequents: AssertionList;
  // antecedents: SequentList; // pick out which assertions of these sequents are used?
  // consequents: AssertionList;
}>;

export type SequentList = readonly Sequent[];
