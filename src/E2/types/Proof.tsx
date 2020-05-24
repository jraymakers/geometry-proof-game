import { Theorem } from './Theorem';

export type Proof = Readonly<{
  theorem: Theorem;
  provedAntecedents: ProvedAssertionList;
}>;

export type ProvedAssertion = Readonly<{
  proof: Proof;
  index: number; // into consequents of proof.theorem
}>;

export type ProvedAssertionList = readonly ProvedAssertion[];
