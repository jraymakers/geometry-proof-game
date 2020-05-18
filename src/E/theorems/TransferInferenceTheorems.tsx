import { Cr } from '../constants/Cr';
import { Pt } from '../constants/Pt';
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
  [Pt.a, Pt.b, Pt.c, Cr.α],
  [
    isTrue(pointIsCenterOfCircle(Pt.a, Cr.α)),
    isTrue(pointIsOnCircle(Pt.b, Cr.α)),
    isTrue(pointIsOnCircle(Pt.c, Cr.α)),
  ],
  [],
  [
    isTrue(segmentsAreEqual(
      segmentMeasure(Pt.a, Pt.b),
      segmentMeasure(Pt.a, Pt.c),
    )),
  ],
);
