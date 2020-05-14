import { circle1 } from '../constants/SemanticCircles';
import { point1OnCircle, point2OnCircle, pointAtCenter } from '../constants/SemanticPoints';
import { relationAssertion } from '../functions/AssertionMakers';
import { segmentMeasure } from '../functions/MetricMakers';
import {
  pointIsCenterOfCircle,
  pointIsOnCircle,
  segmentsAreEqual,
} from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// Diagram-Segment Transfer Axioms #3 (forward)
export const circleRadiiEqualTheorem = theorem(
  'Circle radii equal',
  [
    relationAssertion(pointIsCenterOfCircle(pointAtCenter, circle1)),
    relationAssertion(pointIsOnCircle(point1OnCircle, circle1)),
    relationAssertion(pointIsOnCircle(point2OnCircle, circle1)),
  ],
  [],
  [
    relationAssertion(segmentsAreEqual(
      segmentMeasure(pointAtCenter, point1OnCircle),
      segmentMeasure(pointAtCenter, point2OnCircle),
    )),
  ],
);
