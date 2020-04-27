import { Sentence } from './Sentence';
import { ProofRule } from './ProofRule';

export type ApplicationProofStep = Readonly<{
  proofStepType: 'application';
  rule: ProofRule;
  sentence: Sentence;
}>;

export type SubproofProofStep = Readonly<{
  proofStepType: 'subproof';
  subproof: Proof;
}>;

export type ProofStep
  = ApplicationProofStep
  | SubproofProofStep
  ;

export type Proof = Readonly<{
  assumptions: readonly Sentence[];
  steps: readonly ProofStep[];
}>;
