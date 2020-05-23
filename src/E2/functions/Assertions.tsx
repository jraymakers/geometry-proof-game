import { CenterRelation, OnCircleRelation, PointsEqualRelation } from '../constants/Relations';
import { Assertion } from '../types/Assertion';
import { Elem } from '../types/Elem';
import { ExpList } from '../types/Exp';
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

export function pointOnCircle(a: Elem, alpha: Elem): Assertion {
  return isTrue(OnCircleRelation, elemExp(a), elemExp(alpha));
}

export function pointCenter(a: Elem, alpha: Elem): Assertion {
  return isTrue(CenterRelation, elemExp(a), elemExp(alpha));
}
