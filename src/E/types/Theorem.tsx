import { AssertionList } from './Assertion';
import { GeometricVariableList } from './GeometricVariable';
import { VariableRenameList } from './VariableRename';

export type Theorem = Readonly<{
  name: string;
  forAll: GeometricVariableList;
  antecedents: AssertionList;
  thereExists: GeometricVariableList;
  consequents: AssertionList;
}>;

export type TheoremWithRenames = Readonly<{
  theorem: Theorem;
  renames: VariableRenameList;
}>;
