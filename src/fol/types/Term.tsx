import { AtomicSort, FunctionSort } from './Sort';

// point p, line L, circla alpha
export type ConstantTerm = Readonly<{
  termType: 'constant';
  name: string;
  sort: AtomicSort;
}>;

// length(p,q), angle(p,q,r), area(p,q,r)
export type FunctionTerm = Readonly<{
  termType: 'function';
  sort: FunctionSort;
  args: readonly Term[];
}>;

// point x, line y, circle z
export type VariableTerm = Readonly<{
  termType: 'variable';
  name: string;
  sort: AtomicSort;
}>;

export type Term =  ConstantTerm | FunctionTerm | VariableTerm;
