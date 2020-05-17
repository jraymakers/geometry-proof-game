import { circle1 } from '../constants/SemanticCircles';
import { point1OnCircle, point2OnCircle, pointAtCenter } from '../constants/SemanticPoints';
import { isTrue } from '../functions/AssertionMakers';
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
  [pointAtCenter, point1OnCircle, point2OnCircle, circle1],
  [
    isTrue(pointIsCenterOfCircle(pointAtCenter, circle1)),
    isTrue(pointIsOnCircle(point1OnCircle, circle1)),
    isTrue(pointIsOnCircle(point2OnCircle, circle1)),
  ],
  [],
  [
    isTrue(segmentsAreEqual(
      segmentMeasure(pointAtCenter, point1OnCircle),
      segmentMeasure(pointAtCenter, point2OnCircle),
    )),
  ],
);
