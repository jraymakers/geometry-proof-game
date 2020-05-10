import { AssertionList } from './Assertion';

export type Theorem = Readonly<{
  antecedents: AssertionList;
  consequents: AssertionList;
}>;
