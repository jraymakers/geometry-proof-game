import { CircleSort, LineSort, PointSort } from '../constants/Sorts';
import { ElemPat } from '../types/ElemPat';
import { Sort } from '../types/Sort';

function elemPat(sort: Sort): ElemPat {
  return { sort };
}

export const pointPat = elemPat(PointSort);
export const linePat = elemPat(LineSort);
export const circlePat = elemPat(CircleSort);
