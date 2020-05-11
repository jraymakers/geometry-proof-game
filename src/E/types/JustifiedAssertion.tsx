import { AssertionList } from './Assertion';
import { Justification } from './Justification';

export type JustifiedAssertions = Readonly<{
  justification: Justification;
  assertions: AssertionList;
}>;

export type JustifiedAssertionReference = Readonly<{
  justifiedAssertions: JustifiedAssertions;
  index: number;
}>;

export type JustifiedAssertionReferences = readonly JustifiedAssertionReference[];
