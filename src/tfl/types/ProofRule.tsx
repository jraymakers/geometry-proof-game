import { SentencePattern } from './SentencePattern';

export type ProofRule = Readonly<{
  inputPatterns: readonly SentencePattern[]; // or subproof?
  outputPattern: SentencePattern; // multiple?
}>;
