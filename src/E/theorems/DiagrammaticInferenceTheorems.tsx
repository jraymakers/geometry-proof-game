import { circle1, circle2 } from '../constants/SemanticCircles';
import {
  pointAtCenter,
  pointInsideCircle1,
  pointInsideCircle2,
  pointOnCircle1,
  pointOnCircle2,
} from '../constants/SemanticPoints';
import { relationAssertion } from '../functions/AssertionMakers';
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
  [
    relationAssertion(pointIsCenterOfCircle(pointAtCenter, circle1)),
  ],
  [],
  [
    relationAssertion(pointIsInsideCircle(pointAtCenter, circle1)),
  ],
);

// Intersection Axioms #5
export const circlesMutuallyInsideIntersectTheorem = theorem(
  'Circles mutally inside intersect',
  [
    relationAssertion(pointIsOnCircle(pointOnCircle1, circle1)),
    relationAssertion(pointIsInsideCircle(pointInsideCircle1, circle1)),
    relationAssertion(pointIsOnCircle(pointOnCircle2, circle2)),
    relationAssertion(pointIsInsideCircle(pointInsideCircle2, circle2)),
  ],
  [],
  [
    relationAssertion(circlesIntersect(circle1, circle2)),
  ],
);
