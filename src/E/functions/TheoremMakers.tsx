import { AssertionList } from '../types/Assertion';
import { Theorem, TheoremWithRenames } from '../types/Theorem';
import { VariableRenameList } from '../types/VariableRename';

export function theorem(
  antecedents: AssertionList,
  consequents: AssertionList,
): Theorem {
  return {
    antecedents,
    consequents,
  };
}

export function theoremWithRenames(
  theorem: Theorem,
  renames: VariableRenameList = [],
): TheoremWithRenames {
  return {
    theorem,
    renames,
  };
}
