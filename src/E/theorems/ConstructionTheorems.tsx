import { circle1, circle2, newCircle } from '../constants/SemanticCircles';
import { newPoint, pointAtCenter, pointOnCircle } from '../constants/SemanticPoints';
import { relationAssertion } from '../functions/AssertionMakers';
import {
  circlesIntersect,
  pointIsCenterOfCircle,
  pointIsOnCircle,
  pointsAreEqual,
} from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// Lines and Circles #2
export const constructCircleTheorem = theorem(
  [
    relationAssertion(pointsAreEqual(pointAtCenter, pointOnCircle), false),
  ],
  [
    relationAssertion(pointIsCenterOfCircle(pointAtCenter, newCircle)),
    relationAssertion(pointIsOnCircle(pointOnCircle, newCircle)),
  ],
);

// Intersections #6
export const constructCircleCircleIntersectionPointTheorem = theorem(
  [
    relationAssertion(circlesIntersect(circle1, circle2)),
  ],
  [
    relationAssertion(pointIsOnCircle(newPoint, circle1)),
    relationAssertion(pointIsOnCircle(newPoint, circle2)),
  ],
);
