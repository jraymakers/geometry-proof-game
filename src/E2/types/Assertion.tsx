import { ExpList } from './Exp';
import { Relation } from './Relation';

export type Assertion = Readonly<{
  relation: Relation;
  args: ExpList;
  positive: boolean;
}>;

export type AssertionList = readonly Assertion[];
