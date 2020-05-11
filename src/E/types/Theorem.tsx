import { AssertionList } from './Assertion';
import { VariableRenameList } from './VariableRename';
import { GeometricVariableList } from './GeometricVariable';

export type Theorem = Readonly<{
  antecedents: AssertionList;
  newVariables: GeometricVariableList;
  consequents: AssertionList;
}>;

export type TheoremWithRenames = Readonly<{
  theorem: Theorem;
  renames: VariableRenameList;
}>;
