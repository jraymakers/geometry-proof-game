import { circle1, circle2, newCircle } from '../constants/SemanticCircles';
import { newPoint, pointAtCenter, pointOnCircle } from '../constants/SemanticPoints';
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
  [pointAtCenter, pointOnCircle],
  [
    isFalse(pointsAreEqual(pointAtCenter, pointOnCircle)),
  ],
  [newCircle],
  [
    isTrue(pointIsCenterOfCircle(pointAtCenter, newCircle)),
    isTrue(pointIsOnCircle(pointOnCircle, newCircle)),
  ],
);

// Intersections #6
export const constructCircleCircleIntersectionPointTheorem = theorem(
  'Construct circle/circle intersection point',
  [circle1, circle2],
  [
    isTrue(circlesIntersect(circle1, circle2)),
  ],
  [newPoint],
  [
    isTrue(pointIsOnCircle(newPoint, circle1)),
    isTrue(pointIsOnCircle(newPoint, circle2)),
  ],
);
