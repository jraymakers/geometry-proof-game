import { Relation } from './Relation';

export enum AssertionType {
  Contradiction = 'Contradiction',
  Relation = 'Relation',
}

export type BaseAssertion<TAssertion extends AssertionType> = Readonly<{
  assertionType: TAssertion;
}>;

export type ContradictionAssertion = BaseAssertion<AssertionType.Contradiction>;

export type RelationAssertion = BaseAssertion<AssertionType.Relation> & Readonly<{
  positive: boolean; // false means negated
  relation: Relation;
}>;

export type Assertion
  = ContradictionAssertion
  | RelationAssertion
  ;

export type AssertionList = readonly Assertion[];
