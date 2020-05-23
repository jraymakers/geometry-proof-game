import { CircleSort, LineSort, PointSort } from '../constants/Sorts';
import { Elem } from '../types/Elem';
import { Sort } from '../types/Sort';

function elem(sort: Sort, name: string): Elem {
  return { sort, name };
}

export function point(name: string): Elem {
  return elem(PointSort, name);
}

export function line(name: string): Elem {
  return elem(LineSort, name);
}

export function circle(name: string): Elem {
  return elem(CircleSort, name);
}
