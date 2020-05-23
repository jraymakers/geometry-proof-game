import { SortList } from './Sort';

export type Relation = Readonly<{
  name: string;
  argSorts: SortList;
}>;
