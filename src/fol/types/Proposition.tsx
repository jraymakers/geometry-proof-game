import { Formula } from './Formula';

export type Proposition = Readonly<{
  assumptions: readonly Formula[];
  conclusions: readonly Formula[]; 
}>;
