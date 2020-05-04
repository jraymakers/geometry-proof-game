// point
// line
// circle
export type AtomicSort = Readonly<{
  sortType: 'atomic';
  name: string;
}>;

// length(point, point)
// angle(point, point, point)
// area(point, point, point)
export type FunctionSort = Readonly<{
  sortType: 'function';
  name: string;
  argSorts: readonly AtomicSort[];
}>;
