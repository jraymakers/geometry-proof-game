import { Sort, SortList } from './Sort';

export type Func = Readonly<{
  name: string;
  returnSort: Sort;
  argSorts: SortList;
}>;
