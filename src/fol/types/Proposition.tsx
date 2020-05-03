import { Formula } from './Formula';

// is a proposition the same as a proof rule in some sense?
export type Proposition = Readonly<{
  assumptions: readonly Formula[];
  conclusions: readonly Formula[]; 
}>;
