import { Sentence } from './Sentence';

export type Proposition = Readonly<{
  assumptions: readonly Sentence[];
  conclusions: readonly Sentence[]; 
}>;
