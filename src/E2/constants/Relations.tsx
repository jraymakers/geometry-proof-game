import { Relation } from '../types/Relation';
import { SortList } from '../types/Sort';
import { AngleSort, AreaSort, CircleSort, LineSort, PointSort, SegmentSort } from './Sorts';

function relation(name: string, ...argSorts: SortList): Relation {
  return { name, argSorts };
}

export const PointsEqualRelation = relation('=', PointSort, PointSort);
export const LinesEqualRelation = relation('=', LineSort, LineSort);
export const CirclesEqualRelation = relation('=', CircleSort, CircleSort);

export const SegmentsEqualRelation = relation('=', SegmentSort, SegmentSort);
export const AnglesEqualRelation = relation('=', AngleSort, AngleSort);
export const AreasEqualRelation = relation('=', AreaSort, AreaSort);


export const SegmentsLessThanRelation = relation('<', SegmentSort, SegmentSort);
export const AnglesLessThanRelation = relation('<', AngleSort, AngleSort);
export const AreasLessThanRelation = relation('<', AreaSort, AreaSort);


export const OnLineRelation = relation('on', PointSort, LineSort);
export const SameSideRelation = relation('same-side', PointSort, PointSort, LineSort);
export const BetweenRelation = relation('between', PointSort, PointSort, PointSort);
export const OnCircleRelation = relation('on', PointSort, CircleSort);
export const InsideRelation = relation('inside', PointSort, CircleSort);
export const CenterRelation = relation('center', PointSort, CircleSort);

export const LinesIntersectRelation = relation('intersect', LineSort, LineSort);
export const LineCircleIntersectRelation = relation('intersect', LineSort, CircleSort);
export const CirclesIntersectRelation = relation('intersect', CircleSort, CircleSort);
