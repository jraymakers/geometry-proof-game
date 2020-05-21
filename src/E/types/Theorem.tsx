import { AssertionList } from './Assertion';
import { GeometricVariableList } from './GeometricVariable';

export type Theorem = Readonly<{
  name: string;
  forAll: GeometricVariableList;
  antecedents: AssertionList;
  thereExists: GeometricVariableList;
  consequents: AssertionList;
}>;
