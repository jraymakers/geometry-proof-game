import { AssertionList } from './Assertion';
import { VariableRenameList } from './VariableRename';

export type Theorem = Readonly<{
  antecedents: AssertionList;
  consequents: AssertionList;
}>;

export type TheoremWithRenames = Readonly<{
  theorem: Theorem;
  renames: VariableRenameList;
}>;
