import { Cr } from '../constants/Cr';
import { Pt } from '../constants/Pt';
import { isFalse, isTrue } from '../functions/AssertionMakers';
import {
  circlesIntersect,
  pointIsCenterOfCircle,
  pointIsOnCircle,
  pointsAreEqual,
} from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// Lines and Circles #2
export const constructCircleTheorem = theorem(
  'Construct circle',
  [Pt.a, Pt.b],
  [
    isFalse(pointsAreEqual(Pt.a, Pt.b)),
  ],
  [Cr.α],
  [
    isTrue(pointIsCenterOfCircle(Pt.a, Cr.α)),
    isTrue(pointIsOnCircle(Pt.b, Cr.α)),
  ],
);

// Intersections #6
export const constructCircleCircleIntersectionPointTheorem = theorem(
  'Construct circle/circle intersection point',
  [Cr.α, Cr.β],
  [
    isTrue(circlesIntersect(Cr.α, Cr.β)),
  ],
  [Pt.c],
  [
    isTrue(pointIsOnCircle(Pt.c, Cr.α)),
    isTrue(pointIsOnCircle(Pt.c, Cr.β)),
  ],
);
