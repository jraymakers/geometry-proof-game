import { Cr } from '../../E/constants/Cr';
import { Pt } from '../../E/constants/Pt';
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
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Cr.α, Cr.α),
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
      rename(Pt.a, Pt.b),
      rename(Pt.b, Pt.a),
      rename(Cr.α, Cr.β),
    ]),
    [pointBNotEqualA],
  );
  const pointBCenterOfBeta = justifiedAssertionReference(constructCircleBetaStep, 0);
  const pointAOnBeta = justifiedAssertionReference(constructCircleBetaStep, 1);

  const pointAInsideAlphaStep = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(Pt.a, Pt.a),
      rename(Cr.α, Cr.α),
    ]),
    [pointACenterOfAlpha],
  );
  const pointAInsideAlpha = justifiedAssertionReference(pointAInsideAlphaStep, 0);

  const pointBInsideBetaStep = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(Pt.a, Pt.b),
      rename(Cr.α, Cr.β),
    ]),
    [pointBCenterOfBeta],
  );
  const pointBInsideBeta = justifiedAssertionReference(pointBInsideBetaStep, 0);

  const circlesAlphaBetaIntersectStep = applyTheorem(
    theoremWithRenames(circlesMutuallyInsideIntersectTheorem, [
      rename(Pt.b, Pt.a),
      rename(Pt.a, Pt.b),
      rename(Cr.α, Cr.α),
      rename(Cr.β, Cr.β),
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
      rename(Cr.α, Cr.α),
      rename(Cr.β, Cr.β),
      rename(Pt.c, Pt.c),
    ]),
    [
      circlesAlphaBetaIntersect,
    ],
  );
  const pointCOnAlpha = justifiedAssertionReference(constructAlphaBetaIntersectionPointStep, 0);
  const pointCOnBeta = justifiedAssertionReference(constructAlphaBetaIntersectionPointStep, 1);

  const segmentABEqualsACStep = applyTheorem(
    theoremWithRenames(circleRadiiEqualTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.c),
      rename(Cr.α, Cr.α),
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
      rename(Pt.a, Pt.b),
      rename(Pt.b, Pt.a),
      rename(Pt.c, Pt.c),
      rename(Cr.α, Cr.β),
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
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
    ]),
    [],
  );
  const segmentABEqualsBA = justifiedAssertionReference(segmentABEqualsBAStep, 0);

  const segmentABEqualsBCStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.b),
      rename(Pt.d, Pt.a),
      rename(Pt.e, Pt.b),
      rename(Pt.f, Pt.c),
    ]),
    [
      segmentABEqualsBA,
      segmentBAEqualsBC,
    ],
  );
  const segmentABEqualsBC = justifiedAssertionReference(segmentABEqualsBCStep, 0);

  const segmentBCEqualsABStep = applyTheorem(
    theoremWithRenames(segmentEqualitySymmetryTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.b),
      rename(Pt.d, Pt.c),
    ]),
    [
      segmentABEqualsBC
    ],
  );
  const segmentBCEqualsAB = justifiedAssertionReference(segmentBCEqualsABStep, 0);

  const segmentACEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentSymmetryTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.c),
    ]),
    [],
  );
  const segmentACEqualsCA = justifiedAssertionReference(segmentACEqualsCAStep, 0);

  const segmentABEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.a),
      rename(Pt.d, Pt.c),
      rename(Pt.e, Pt.c),
      rename(Pt.f, Pt.a),
    ]),
    [
      segmentABEqualsAC,
      segmentACEqualsCA,
    ],
  );
  const segmentABEqualsCA = justifiedAssertionReference(segmentABEqualsCAStep, 0);

  const segmentBCEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(Pt.a, Pt.c),
      rename(Pt.b, Pt.c),
      rename(Pt.c, Pt.a),
      rename(Pt.d, Pt.b),
      rename(Pt.e, Pt.c),
      rename(Pt.f, Pt.a),
    ]),
    [
      segmentBCEqualsAB,
      segmentABEqualsCA,
    ],
  );
  const segmentBCEqualsCA = justifiedAssertionReference(segmentBCEqualsCAStep, 0);

  return [segmentABEqualsBC, segmentBCEqualsCA];
}
