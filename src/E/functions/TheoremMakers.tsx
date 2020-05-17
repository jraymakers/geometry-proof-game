import { AssertionList } from '../types/Assertion';
import { GeometricVariableList } from '../types/GeometricVariable';
import { Theorem, TheoremWithRenames } from '../types/Theorem';
import { VariableRenameList } from '../types/VariableRename';

export function theorem(
  name: string,
  forAll: GeometricVariableList,
  antecedents: AssertionList,
  thereExists: GeometricVariableList,
  consequents: AssertionList,
): Theorem {
  return {
    name,
    forAll,
    antecedents,
    thereExists,
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
