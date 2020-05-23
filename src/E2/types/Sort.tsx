export type Sort = Readonly<{
  name: string;
  parts: SortList;
}>;

export type SortList = readonly Sort[];
