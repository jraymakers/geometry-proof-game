import { AssertionList } from '../types/Assertion';
import { GeometricVariableList } from '../types/GeometricVariable';
import { Theorem, TheoremWithRenames } from '../types/Theorem';
import { VariableRenameList } from '../types/VariableRename';

export function theorem(
  antecedents: AssertionList,
  newVariables: GeometricVariableList,
  consequents: AssertionList,
): Theorem {
  return {
    antecedents,
    newVariables,
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
