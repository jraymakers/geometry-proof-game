import { Func } from '../types/Func';
import { Sort, SortList } from '../types/Sort';
import { AngleSort, AreaSort, PointSort, SegmentSort } from './Sorts';

function func(name: string, returnSort: Sort, ...argSorts: SortList): Func {
  return { name, returnSort, argSorts };
}

export const SegmentFunc = func('segment', SegmentSort, PointSort, PointSort);
export const AddSegmentsFunc = func('+', SegmentSort, SegmentSort, SegmentSort);
export const ZeroSegmentConst = func('0', SegmentSort);

export const AngleFunc = func('angle', AngleSort, PointSort, PointSort, PointSort);
export const AddAnglesFunc = func('+', AngleSort, AngleSort, AngleSort);
export const ZeroAngleConst = func('0', AngleSort);
export const RightAngleConst = func('∟', AngleSort);

export const AreaFunc = func('area', AreaSort, PointSort, PointSort, PointSort);
export const AddAreasFunc = func('+', AreaSort, AreaSort, AreaSort);
export const ZeroAreaConst = func('0', AreaSort);
