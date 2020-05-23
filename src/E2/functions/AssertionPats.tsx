import { CenterRelation, OnCircleRelation, PointsEqualRelation } from '../constants/Relations';
import { AssertionPat } from '../types/AssertionPat';
import { ElemPat } from '../types/ElemPat';
import { ExpPat } from '../types/ExpPat';
import { Relation } from '../types/Relation';
import { elemExpPat } from './ExpPats';

export function truePat(relation: Relation, ...args: readonly ExpPat[]): AssertionPat {
  return { relation, args, positive: true };
}

export function falsePat(relation: Relation, ...args: readonly ExpPat[]): AssertionPat {
  return { relation, args, positive: false };
}

export function pointsEqualPat(a: ElemPat, b: ElemPat): AssertionPat {
  return truePat(PointsEqualRelation, elemExpPat(a), elemExpPat(b));
}

export function pointsNotEqualPat(a: ElemPat, b: ElemPat): AssertionPat {
  return falsePat(PointsEqualRelation, elemExpPat(a), elemExpPat(b));
}

export function pointOnCirclePat(a: ElemPat, alpha: ElemPat): AssertionPat {
  return truePat(OnCircleRelation, elemExpPat(a), elemExpPat(alpha));
}

export function pointCenterPat(a: ElemPat, alpha: ElemPat): AssertionPat {
  return truePat(CenterRelation, elemExpPat(a), elemExpPat(alpha));
}
