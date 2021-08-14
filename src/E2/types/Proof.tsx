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



// export type ProofByCases = Readonly<{
  
//   mutualConsequents: ProvedByCasesAssertionList;
// }>;

export type ProvedByCasesAssertion = Readonly<{
  // is the assertion that is either positive or negative needed?
  positiveProof: Proof;
  negativeProof: Proof;
  positiveIndex: number;
  negativeIndex: number;
}>;

export type ProvedByCasesAssertionList = readonly ProvedByCasesAssertion[];
