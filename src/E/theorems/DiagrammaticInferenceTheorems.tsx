import { circle1, circle2 } from '../constants/SemanticCircles';
import {
  pointAtCenter,
  pointInsideCircle1,
  pointInsideCircle2,
  pointOnCircle1,
  pointOnCircle2,
} from '../constants/SemanticPoints';
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
  [pointAtCenter, circle1],
  [
    isTrue(pointIsCenterOfCircle(pointAtCenter, circle1)),
  ],
  [],
  [
    isTrue(pointIsInsideCircle(pointAtCenter, circle1)),
  ],
);

// Intersection Axioms #5
export const circlesMutuallyInsideIntersectTheorem = theorem(
  'Circles mutally inside intersect',
  [pointOnCircle1, pointOnCircle2, circle1, circle2],
  [
    isTrue(pointIsOnCircle(pointOnCircle1, circle1)),
    isTrue(pointIsInsideCircle(pointInsideCircle1, circle1)),
    isTrue(pointIsOnCircle(pointOnCircle2, circle2)),
    isTrue(pointIsInsideCircle(pointInsideCircle2, circle2)),
  ],
  [],
  [
    isTrue(circlesIntersect(circle1, circle2)),
  ],
);
