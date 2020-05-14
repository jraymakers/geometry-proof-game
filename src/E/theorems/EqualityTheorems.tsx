import { segment12, segment34, segment56 } from '../constants/SemanticSegments';
import { relationAssertion } from '../functions/AssertionMakers';
import { segmentsAreEqual } from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

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
