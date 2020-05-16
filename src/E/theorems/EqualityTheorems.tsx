import { pointA, pointB } from '../../euclid/constants/NamedPoints';
import { segment12, segment34, segment56 } from '../constants/SemanticSegments';
import { relationAssertion } from '../functions/AssertionMakers';
import { pointsAreEqual, segmentsAreEqual } from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

export const pointEqualitySymmetryTheorem = theorem(
  'Point equality symmetry',
  [
    relationAssertion(pointsAreEqual(pointA, pointB)),
  ],
  [],
  [
    relationAssertion(pointsAreEqual(pointB, pointA)),
  ],
);

export const pointNonEqualitySymmetryTheorem = theorem(
  'Point non-equality symmetry',
  [
    relationAssertion(pointsAreEqual(pointA, pointB), false),
  ],
  [],
  [
    relationAssertion(pointsAreEqual(pointB, pointA), false),
  ],
);

export const segmentEqualitySymmetryTheorem = theorem(
  'Segment equality symmetry',
  [
    relationAssertion(segmentsAreEqual(segment12, segment34)),
  ],
  [],
  [
    relationAssertion(segmentsAreEqual(segment34, segment12)),
  ],
);

export const segmentNonEqualitySymmetryTheorem = theorem(
  'Segment non-equality symmetry',
  [
    relationAssertion(segmentsAreEqual(segment12, segment34), false),
  ],
  [],
  [
    relationAssertion(segmentsAreEqual(segment34, segment12), false),
  ],
);

export const segmentEqualityTransitivityTheorem = theorem(
  'Segment equality transitivity',
  [
    relationAssertion(segmentsAreEqual(segment12, segment34)),
    relationAssertion(segmentsAreEqual(segment34, segment56)),
  ],
  [],
  [
    relationAssertion(segmentsAreEqual(segment12, segment56)),
  ],
);
