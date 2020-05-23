import { ExpPat } from './ExpPat';
import { Relation } from './Relation';

export type AssertionPat = Readonly<{
  relation: Relation;
  args: readonly ExpPat[];
  positive: boolean;
}>;
