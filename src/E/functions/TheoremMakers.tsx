import { AssertionList } from '../types/Assertion';
import { Theorem, TheoremWithRenames } from '../types/Theorem';
import { VariableRenameList } from '../types/VariableRename';
import { GeometricVariableList } from '../types/GeometricVariable';

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
