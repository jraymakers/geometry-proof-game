import { Sort, SortList } from '../types/Sort';

function sort(name: string, ...parts: SortList): Sort {
  return { name, parts };
}

export const PointSort = sort('Point');
export const LineSort = sort('Line');
export const CircleSort = sort('Circle');

export const SegmentSort = sort('Segment', PointSort, PointSort);
export const AngleSort = sort('Angle', PointSort, PointSort, PointSort);
export const AreaSort = sort('Area', PointSort, PointSort, PointSort);
