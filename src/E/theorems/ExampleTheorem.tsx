import { Cr } from '../constants/Cr';
import { Ln } from '../constants/Ln';
import { Pt } from '../constants/Pt';
import { isTrue, isFalse, contradictionAssertion } from '../functions/AssertionMakers';
import { segmentMeasure, angleMeasure, areaMeasure } from '../functions/MetricMakers';
import { segmentsAreEqual, anglesAreEqual, areasAreEqual, pointsAreEqual, linesAreEqual, segmentLessThanSegment, angleLessThanAngle, areaLessThanArea, circlesAreEqual } from '../functions/RelationMakers';
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
  
    isTrue(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
    isFalse(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
    isTrue(anglesAreEqual(angleMeasure(Pt.a, Pt.b, Pt.c), angleMeasure(Pt.d, Pt.e, Pt.f))),
    isFalse(anglesAreEqual(angleMeasure(Pt.a, Pt.b, Pt.c), angleMeasure(Pt.d, Pt.e, Pt.f))),
    isTrue(areasAreEqual(areaMeasure(Pt.a, Pt.b, Pt.c), areaMeasure(Pt.d, Pt.e, Pt.f))),
    isFalse(areasAreEqual(areaMeasure(Pt.a, Pt.b, Pt.c), areaMeasure(Pt.d, Pt.e, Pt.f))),

    isTrue(segmentLessThanSegment(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
    isFalse(segmentLessThanSegment(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.c, Pt.d))),
    isTrue(angleLessThanAngle(angleMeasure(Pt.a, Pt.b, Pt.c), angleMeasure(Pt.d, Pt.e, Pt.f))),
    isFalse(angleLessThanAngle(angleMeasure(Pt.a, Pt.b, Pt.c), angleMeasure(Pt.d, Pt.e, Pt.f))),
    isTrue(areaLessThanArea(areaMeasure(Pt.a, Pt.b, Pt.c), areaMeasure(Pt.d, Pt.e, Pt.f))),
    isFalse(areaLessThanArea(areaMeasure(Pt.a, Pt.b, Pt.c), areaMeasure(Pt.d, Pt.e, Pt.f))),
  ],
  [Pt.g, Pt.h, Ln.N, Cr.γ],
  [
    contradictionAssertion,
  ],
);
