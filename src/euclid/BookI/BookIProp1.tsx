import { Cr } from '../../E/constants/Cr';
import { Pt } from '../../E/constants/Pt';
import { circle1, circle2, newCircle } from '../../E/constants/SemanticCircles';
import {
  newPoint,
  point1,
  point1OnCircle,
  point2,
  point2OnCircle,
  point3,
  point4,
  point5,
  point6,
  pointAtCenter,
  pointInsideCircle1,
  pointInsideCircle2,
  pointOnCircle,
  pointOnCircle1,
  pointOnCircle2,
} from '../../E/constants/SemanticPoints';
import { isFalse, isTrue } from '../../E/functions/AssertionMakers';
import {
  applyTheorem,
  assumeAll,
  justifiedAssertionReference,
} from '../../E/functions/JustifiedAssertionMakers';
import { segmentMeasure } from '../../E/functions/MetricMakers';
import { pointsAreEqual, segmentsAreEqual } from '../../E/functions/RelationMakers';
import { rename } from '../../E/functions/RenameMakers';
import { theorem, theoremWithRenames } from '../../E/functions/TheoremMakers';
import {
  constructCircleCircleIntersectionPointTheorem,
  constructCircleTheorem,
} from '../../E/theorems/ConstructionTheorems';
import {
  centerInsideTheorem,
  circlesMutuallyInsideIntersectTheorem,
} from '../../E/theorems/DiagrammaticInferenceTheorems';
import {
  pointNonEqualitySymmetryTheorem,
  segmentEqualitySymmetryTheorem,
  segmentEqualityTransitivityTheorem,
} from '../../E/theorems/EqualityTheorems';
import { segmentSymmetryTheorem } from '../../E/theorems/MetricInferenceTheorems';
import { circleRadiiEqualTheorem } from '../../E/theorems/TransferInferenceTheorems';
import { JustifiedAssertionReferences } from '../../E/types/JustifiedAssertion';

export const BookIProp1 = theorem(
  'I.1',
  [Pt.a, Pt.b],
  [
    isFalse(pointsAreEqual(Pt.a, Pt.b)),
  ],
  [Pt.c],
  [
    isTrue(segmentsAreEqual(segmentMeasure(Pt.a, Pt.b), segmentMeasure(Pt.b, Pt.c))),
    isTrue(segmentsAreEqual(segmentMeasure(Pt.b, Pt.c), segmentMeasure(Pt.c, Pt.a))),
  ],
);

export function proveBookIProp1(): JustifiedAssertionReferences {
  const assumptions = assumeAll(BookIProp1.antecedents);
  const pointANotEqualB = justifiedAssertionReference(assumptions, 0);

  const constructCircleAlphaStep = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(pointAtCenter, Pt.a),
      rename(pointOnCircle, Pt.b),
      rename(newCircle, Cr.α),
    ]),
    [pointANotEqualB],
  );
  const pointACenterOfAlpha = justifiedAssertionReference(constructCircleAlphaStep, 0);
  const pointBOnAlpha = justifiedAssertionReference(constructCircleAlphaStep, 1);

  const pointBNotEqualAStep = applyTheorem(
    theoremWithRenames(pointNonEqualitySymmetryTheorem),
    [pointANotEqualB],
  );
  const pointBNotEqualA = justifiedAssertionReference(pointBNotEqualAStep, 0);

  const constructCircleBetaStep = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(pointAtCenter, Pt.b),
      rename(pointOnCircle, Pt.a),
      rename(newCircle, Cr.β),
    ]),
    [pointBNotEqualA],
  );
  const pointBCenterOfBeta = justifiedAssertionReference(constructCircleBetaStep, 0);
  const pointAOnBeta = justifiedAssertionReference(constructCircleBetaStep, 1);

  const pointAInsideAlphaStep = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(pointAtCenter, Pt.a),
      rename(circle1, Cr.α),
    ]),
    [pointACenterOfAlpha],
  );
  const pointAInsideAlpha = justifiedAssertionReference(pointAInsideAlphaStep, 0);

  const pointBInsideBetaStep = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(pointAtCenter, Pt.b),
      rename(circle1, Cr.β),
    ]),
    [pointBCenterOfBeta],
  );
  const pointBInsideBeta = justifiedAssertionReference(pointBInsideBetaStep, 0);

  const circlesAlphaBetaIntersectStep = applyTheorem(
    theoremWithRenames(circlesMutuallyInsideIntersectTheorem, [
      rename(pointInsideCircle1, Pt.a),
      rename(pointInsideCircle2, Pt.b),
      rename(pointOnCircle1, Pt.b),
      rename(pointOnCircle2, Pt.a),
      rename(circle1, Cr.α),
      rename(circle2, Cr.β),
    ]),
    [
      pointBOnAlpha,
      pointAInsideAlpha,
      pointAOnBeta,
      pointBInsideBeta,
    ],
  );
  const circlesAlphaBetaIntersect = justifiedAssertionReference(circlesAlphaBetaIntersectStep, 0);

  const constructAlphaBetaIntersectionPointStep = applyTheorem(
    theoremWithRenames(constructCircleCircleIntersectionPointTheorem, [
      rename(circle1, Cr.α),
      rename(circle1, Cr.β),
      rename(newPoint, Pt.c),
    ]),
    [
      circlesAlphaBetaIntersect,
    ],
  );
  const pointCOnAlpha = justifiedAssertionReference(constructAlphaBetaIntersectionPointStep, 0);
  const pointCOnBeta = justifiedAssertionReference(constructAlphaBetaIntersectionPointStep, 1);

  const segmentABEqualsACStep = applyTheorem(
    theoremWithRenames(circleRadiiEqualTheorem, [
      rename(pointAtCenter, Pt.a),
      rename(point1OnCircle, Pt.b),
      rename(point2OnCircle, Pt.c),
      rename(circle1, Cr.α),
    ]),
    [
      pointACenterOfAlpha,
      pointBOnAlpha,
      pointCOnAlpha,
    ],
  );
  const segmentABEqualsAC = justifiedAssertionReference(segmentABEqualsACStep, 0);

  const segmentBAEqualsBCStep = applyTheorem(
    theoremWithRenames(circleRadiiEqualTheorem, [
      rename(pointAtCenter, Pt.b),
      rename(point1OnCircle, Pt.a),
      rename(point2OnCircle, Pt.c),
      rename(circle1, Cr.β),
    ]),
    [
      pointBCenterOfBeta,
      pointAOnBeta,
      pointCOnBeta,
    ],
  );
  const segmentBAEqualsBC = justifiedAssertionReference(segmentBAEqualsBCStep, 0);

  const segmentABEqualsBAStep = applyTheorem(
    theoremWithRenames(segmentSymmetryTheorem, [
      rename(point1, Pt.a),
      rename(point2, Pt.b),
    ]),
    [],
  );
  const segmentABEqualsBA = justifiedAssertionReference(segmentABEqualsBAStep, 0);

  const segmentABEqualsBCStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(point1, Pt.a),
      rename(point2, Pt.b),
      rename(point3, Pt.b),
      rename(point4, Pt.a),
      rename(point5, Pt.b),
      rename(point6, Pt.c),
    ]),
    [
      segmentABEqualsBA,
      segmentBAEqualsBC,
    ],
  );
  const segmentABEqualsBC = justifiedAssertionReference(segmentABEqualsBCStep, 0);

  const segmentBCEqualsABStep = applyTheorem(
    theoremWithRenames(segmentEqualitySymmetryTheorem, [
      rename(point1, Pt.a),
      rename(point2, Pt.b),
      rename(point3, Pt.b),
      rename(point4, Pt.c),
    ]),
    [
      segmentABEqualsBC
    ],
  );
  const segmentBCEqualsAB = justifiedAssertionReference(segmentBCEqualsABStep, 0);

  const segmentACEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentSymmetryTheorem, [
      rename(point1, Pt.a),
      rename(point2, Pt.c),
    ]),
    [],
  );
  const segmentACEqualsCA = justifiedAssertionReference(segmentACEqualsCAStep, 0);

  const segmentABEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(point1, Pt.a),
      rename(point2, Pt.b),
      rename(point3, Pt.a),
      rename(point4, Pt.c),
      rename(point5, Pt.c),
      rename(point6, Pt.a),
    ]),
    [
      segmentABEqualsAC,
      segmentACEqualsCA,
    ],
  );
  const segmentABEqualsCA = justifiedAssertionReference(segmentABEqualsCAStep, 0);

  const segmentBCEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(point1, Pt.c),
      rename(point2, Pt.c),
      rename(point3, Pt.a),
      rename(point4, Pt.b),
      rename(point5, Pt.c),
      rename(point6, Pt.a),
    ]),
    [
      segmentBCEqualsAB,
      segmentABEqualsCA,
    ],
  );
  const segmentBCEqualsCA = justifiedAssertionReference(segmentBCEqualsCAStep, 0);

  return [segmentABEqualsBC, segmentBCEqualsCA];
}
