// point
// line
// circle
export type AtomicSort = Readonly<{
  name: string;
}>;

// length(point, point)
// angle(point, point, point)
// area(point, point, point)
export type FunctionSort = Readonly<{
  name: string;
  argSorts: readonly AtomicSort[];
}>;
