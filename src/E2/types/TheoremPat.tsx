import { AssertionPat } from './AssertionPat';
import { Sort } from './Sort';

export type TheoremPat = Readonly<{
  name: string;
  forAll: readonly Sort[];
  antecedents: readonly AssertionPat[];
  thereExists: readonly Sort[];
  consequents: readonly AssertionPat[];
}>;
