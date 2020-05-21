import { Cr } from '../constants/Cr';
import { Ln } from '../constants/Ln';
import { Pt } from '../constants/Pt';
import { contradictionAssertion, isFalse, isTrue } from '../functions/AssertionMakers';
import { angle, area, seg } from '../functions/MetricMakers';
import {
  angleLessThanAngle,
  anglesAreEqual,
  areaLessThanArea,
  areasAreEqual,
  circlesAreEqual,
  linesAreEqual,
  pointsAreEqual,
  segmentLessThanSegment,
  segmentsAreEqual,
} from '../functions/RelationMakers';
import { theorem } from '../functions/TheoremMakers';

// Example to show all symbols
export const exampleTheorem = theorem(
  'Example',
  [Pt.a, Pt.b, Pt.c, Pt.d, Pt.e, Pt.f, Ln.L, Ln.M, Cr.α, Cr.β],
  [
    isTrue(pointsAreEqual(Pt.a, Pt.b)),
    isFalse(pointsAreEqual(Pt.a, Pt.b)),
    isTrue(linesAreEqual(Ln.L, Ln.M)),
    isFalse(linesAreEqual(Ln.L, Ln.M)),
    isTrue(circlesAreEqual(Cr.α, Cr.β)),
    isFalse(circlesAreEqual(Cr.α, Cr.β)),
  
    isTrue(segmentsAreEqual(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d))),
    isFalse(segmentsAreEqual(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d))),
    isTrue(anglesAreEqual(angle(Pt.a, Pt.b, Pt.c), angle(Pt.d, Pt.e, Pt.f))),
    isFalse(anglesAreEqual(angle(Pt.a, Pt.b, Pt.c), angle(Pt.d, Pt.e, Pt.f))),
    isTrue(areasAreEqual(area(Pt.a, Pt.b, Pt.c), area(Pt.d, Pt.e, Pt.f))),
    isFalse(areasAreEqual(area(Pt.a, Pt.b, Pt.c), area(Pt.d, Pt.e, Pt.f))),

    isTrue(segmentLessThanSegment(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d))),
    isFalse(segmentLessThanSegment(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d))),
    isTrue(angleLessThanAngle(angle(Pt.a, Pt.b, Pt.c), angle(Pt.d, Pt.e, Pt.f))),
    isFalse(angleLessThanAngle(angle(Pt.a, Pt.b, Pt.c), angle(Pt.d, Pt.e, Pt.f))),
    isTrue(areaLessThanArea(area(Pt.a, Pt.b, Pt.c), area(Pt.d, Pt.e, Pt.f))),
    isFalse(areaLessThanArea(area(Pt.a, Pt.b, Pt.c), area(Pt.d, Pt.e, Pt.f))),
  ],
  [Pt.g, Pt.h, Ln.N, Cr.γ],
  [
    contradictionAssertion,
  ],
);
