import { pointA, pointB, pointC, pointD, pointE, pointF } from '../../euclid/constants/NamedPoints';
import { isFalse, isTrue } from '../functions/AssertionMakers';
import { segmentMeasure } from '../functions/MetricMakers';
import { pointsAreEqual, segmentsAreEqual } from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

export const pointEqualitySymmetryTheorem = theorem(
  'Point equality symmetry',
  [pointA, pointB],
  [
    isTrue(pointsAreEqual(pointA, pointB)),
  ],
  [],
  [
    isTrue(pointsAreEqual(pointB, pointA)),
  ],
);

export const pointNonEqualitySymmetryTheorem = theorem(
  'Point non-equality symmetry',
  [pointA, pointB],
  [
    isFalse(pointsAreEqual(pointA, pointB)),
  ],
  [],
  [
    isFalse(pointsAreEqual(pointB, pointA)),
  ],
);

export const segmentEqualitySymmetryTheorem = theorem(
  'Segment equality symmetry',
  [pointA, pointB, pointC, pointD],
  [
    isTrue(segmentsAreEqual(segmentMeasure(pointA, pointB), segmentMeasure(pointC, pointD))),
  ],
  [],
  [
    isTrue(segmentsAreEqual(segmentMeasure(pointC, pointD), segmentMeasure(pointA, pointB))),
  ],
);

export const segmentNonEqualitySymmetryTheorem = theorem(
  'Segment non-equality symmetry',
  [pointA, pointB, pointC, pointD],
  [
    isFalse(segmentsAreEqual(segmentMeasure(pointA, pointB), segmentMeasure(pointC, pointD))),
  ],
  [],
  [
    isFalse(segmentsAreEqual(segmentMeasure(pointC, pointD), segmentMeasure(pointA, pointB))),
  ],
);

export const segmentEqualityTransitivityTheorem = theorem(
  'Segment equality transitivity',
  [pointA, pointB, pointC, pointD, pointE, pointF],
  [
    isTrue(segmentsAreEqual(segmentMeasure(pointA, pointB), segmentMeasure(pointC, pointD))),
    isTrue(segmentsAreEqual(segmentMeasure(pointC, pointD), segmentMeasure(pointE, pointF))),
  ],
  [],
  [
    isTrue(segmentsAreEqual(segmentMeasure(pointA, pointB), segmentMeasure(pointE, pointF))),
  ],
);
