import {
  CenterRelation,
  CirclesIntersectRelation,
  InsideRelation,
  OnCircleRelation,
  PointsEqualRelation,
  SegmentsEqualRelation,
} from '../constants/Relations';
import { Assertion } from '../types/Assertion';
import { Elem } from '../types/Elem';
import { ExpList, FuncExp } from '../types/Exp';
import { Relation } from '../types/Relation';
import { elemExp } from './Exps';

export function isTrue(relation: Relation, ...args: ExpList): Assertion {
  return { relation, args, positive: true };
}

export function isFalse(relation: Relation, ...args: ExpList): Assertion {
  return { relation, args, positive: false };
}


export function pointsEqual(a: Elem, b: Elem): Assertion {
  return isTrue(PointsEqualRelation, elemExp(a), elemExp(b));
}

export function pointsNotEqual(a: Elem, b: Elem): Assertion {
  return isFalse(PointsEqualRelation, elemExp(a), elemExp(b));
}

export function segmentsEqual(ab: FuncExp, cd: FuncExp): Assertion {
  return isTrue(SegmentsEqualRelation, ab, cd);
}

export function segmentsNotEqual(ab: FuncExp, cd: FuncExp): Assertion {
  return isFalse(SegmentsEqualRelation, ab, cd);
}


export function pointIsOnCircle(a: Elem, alpha: Elem): Assertion {
  return isTrue(OnCircleRelation, elemExp(a), elemExp(alpha));
}

export function pointIsInside(a: Elem, alpha: Elem): Assertion {
  return isTrue(InsideRelation, elemExp(a), elemExp(alpha));
}

export function pointIsCenter(a: Elem, alpha: Elem): Assertion {
  return isTrue(CenterRelation, elemExp(a), elemExp(alpha));
}

export function circlesIntersect(alpha: Elem, beta: Elem): Assertion {
  return isTrue(CirclesIntersectRelation, elemExp(alpha), elemExp(beta));
}
