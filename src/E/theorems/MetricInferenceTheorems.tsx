import { point1, point2 } from '../constants/SemanticPoints';
import { isTrue } from '../functions/AssertionMakers';
import { segmentMeasure } from '../functions/MetricMakers';
import { segmentsAreEqual } from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// #3: ab=ba
export const segmentSymmetryTheorem = theorem(
  'Segment symmetry',
  [point1, point2],
  [],
  [],
  [
    isTrue(segmentsAreEqual(segmentMeasure(point1, point2), segmentMeasure(point2, point1))),
  ],
);
