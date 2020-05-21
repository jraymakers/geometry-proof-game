import { Pt } from '../constants/Pt';
import { isTrue } from '../functions/AssertionMakers';
import { seg } from '../functions/MetricMakers';
import { segmentsAreEqual } from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// #3: ab=ba
export const segmentSymmetryTheorem = theorem(
  'Segment symmetry',
  [Pt.a, Pt.b],
  [],
  [],
  [
    isTrue(segmentsAreEqual(seg(Pt.a, Pt.b), seg(Pt.b, Pt.a))),
  ],
);
