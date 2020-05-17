import { AssertionType, ContradictionAssertion, RelationAssertion } from '../types/Assertion';
import { Relation } from '../types/Relation';

export const contradictionAssertion: ContradictionAssertion = {
  assertionType: AssertionType.Contradiction,
};

export function relationAssertion(relation: Relation, positive: boolean): RelationAssertion {
  return {
    assertionType: AssertionType.Relation,
    positive,
    relation,
  };
}

export function isTrue(relation: Relation): RelationAssertion {
  return relationAssertion(relation, true);
}

export function isFalse(relation: Relation): RelationAssertion {
  return relationAssertion(relation, false);
}
