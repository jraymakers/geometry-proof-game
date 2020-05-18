import { Cr } from '../constants/Cr';
import { Pt } from '../constants/Pt';
import { isTrue } from '../functions/AssertionMakers';
import {
  circlesIntersect,
  pointIsCenterOfCircle,
  pointIsInsideCircle,
  pointIsOnCircle,
} from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// Generalities #3
export const centerInsideTheorem = theorem(
  'Center inside',
  [Pt.a, Cr.α],
  [
    isTrue(pointIsCenterOfCircle(Pt.a, Cr.α)),
  ],
  [],
  [
    isTrue(pointIsInsideCircle(Pt.a, Cr.α)),
  ],
);

// Intersection Axioms #5
export const circlesMutuallyInsideIntersectTheorem = theorem(
  'Circles mutally inside intersect',
  [Pt.a, Pt.b, Cr.α, Cr.β],
  [
    isTrue(pointIsOnCircle(Pt.a, Cr.α)),
    isTrue(pointIsInsideCircle(Pt.b, Cr.α)),
    isTrue(pointIsOnCircle(Pt.b, Cr.β)),
    isTrue(pointIsInsideCircle(Pt.a, Cr.β)),
  ],
  [],
  [
    isTrue(circlesIntersect(Cr.α, Cr.β)),
  ],
);
