import { Assertion, AssertionList } from './Assertion';
import { ElemList } from './Elem';
import { Sort } from './Sort';

export type Theorem = Readonly<{
  name: string;
  forAll: ElemList;
  antecedents: AssertionList;
  thereExists: ElemList;
  consequents: AssertionList;
}>;

export type ElemSet = Readonly<{
   [name: string]: Sort;
}>;

export type Theorem2 = Readonly<{
  name: string;
  forAll: ElemSet;
  antecedents: readonly Assertion[];
  thereExists: ElemSet;
  consequents: readonly Assertion[];
}>;
