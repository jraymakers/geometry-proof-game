import { AssertionList } from './Assertion';
import { Justification } from './Justification';

export type JustifiedAssertion = Readonly<{
  justification: Justification;
  assertions: AssertionList;
}>;
