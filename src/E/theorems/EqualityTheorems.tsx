import { segment12, segment34, segment56 } from '../constants/SemanticSegments';
import { theorem } from '../functions/TheoremMakers';
import { relationAssertion } from '../functions/AssertionMakers';
import { segmentsAreEqual } from '../functions/RelationMakers';

export const segmentEqualitySymmetryTheorem = theorem(
  [
    relationAssertion(segmentsAreEqual(segment12, segment34)),
  ],
  [],
  [
    relationAssertion(segmentsAreEqual(segment34, segment12)),
  ],
);

export const segmentEqualityTransitivityTheorem = theorem(
  [
    relationAssertion(segmentsAreEqual(segment12, segment34)),
    relationAssertion(segmentsAreEqual(segment34, segment56)),
  ],
  [],
  [
    relationAssertion(segmentsAreEqual(segment12, segment56)),
  ],
);
