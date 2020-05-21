import { AssertionList } from '../types/Assertion';
import { GeometricVariableList } from '../types/GeometricVariable';
import { Theorem } from '../types/Theorem';

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
