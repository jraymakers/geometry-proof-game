import { AssertionList } from './Assertion';
import { ElemList } from './Elem';

export type Theorem = Readonly<{
  name: string;
  forAll: ElemList;
  antecedents: AssertionList;
  thereExists: ElemList;
  consequents: AssertionList;
}>;
