import { Sort } from './Sort';

export type Elem = Readonly<{
  sort: Sort;
  name: string;
}>;

export type ElemList = readonly Elem[];
