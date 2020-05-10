import { AssertionList } from '../types/Assertion';
import { Theorem } from '../types/Theorem';

export function theorem(
  antecedents: AssertionList,
  consequents: AssertionList,
): Theorem {
  return {
    antecedents,
    consequents,
  };
}
