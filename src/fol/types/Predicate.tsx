import { AtomicSort } from './Sort';

// on(point, line)
// same-side(point, point, line)
// between(point, point, point)
// on(point, circle)
// inside(point, circle)
// center(point, circle)
// intersects(line, line)
// intersects(line, circle)
// intersects(circle, circle)
export type Predicate = Readonly<{
  name: string;
  argSorts: readonly AtomicSort[];
}>;
