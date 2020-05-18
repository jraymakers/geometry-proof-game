import { Pt } from '../constants/Pt';
import { isFalse, isTrue } from '../functions/AssertionMakers';
import { segmentMeasure } from '../functions/MetricMakers';
import { pointsAreEqual, segmentsAreEqual } from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

export const pointEqualitySymmetryTheorem = theorem(
  'Point equality symmetry',
  [Pt.a, Pt.b],
  [
    isTrue(pointsAreEqual(Pt.a, Pt.b)),
  ],
  [],
  [
    isTrue(pointsAreEqual(Pt.b, Pt.a)),
  ],
);

export const pointNonEqualitySymmetryTheorem = theorem(
  'Point non-equality symmetry',
  [Pt.a, Pt.b],
  [
    isFalse(pointsAreEqual(Pt.a, Pt.b)),
  ],
  [],
  [
    isFalse(pointsAreEqual(Pt.b, Pt.a)),
  ],
);

export const segmentEqualitySymmetryTheorem = theorem(
  'Segment equality symmetry',
  [Pt.a, Pt.b, Pt.c, Pt.d],
  [
    isTrue(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
  ],
  [],
  [
    isTrue(segmentsAreEqual(segmentMeasure(Pt.c, Pt.d), segmentMeasure(Pt.a, Pt.b))),
  ],
);

export const segmentNonEqualitySymmetryTheorem = theorem(
  'Segment non-equality symmetry',
  [Pt.a, Pt.b, Pt.c, Pt.d],
  [
    isFalse(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
  ],
  [],
  [
    isFalse(segmentsAreEqual(segmentMeasure(Pt.c, Pt.d), segmentMeasure(Pt.a, Pt.b))),
  ],
);

export const segmentEqualityTransitivityTheorem = theorem(
  'Segment equality transitivity',
  [Pt.a, Pt.b, Pt.c, Pt.d, Pt.e, Pt.f],
  [
    isTrue(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
    isTrue(segmentsAreEqual(segmentMeasure(Pt.c, Pt.d), segmentMeasure(Pt.e, Pt.f))),
  ],
  [],
  [
    isTrue(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.e, Pt.f))),
  ],
);
