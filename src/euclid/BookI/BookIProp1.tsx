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
import { relationAssertion } from '../../E/functions/AssertionMakers';
import {
  applyTheorem,
  assumeAll,
  justifiedAssertionReference,
} from '../../E/functions/JustifiedAssertionMakers';
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
  segmentEqualitySymmetryTheorem,
  segmentEqualityTransitivityTheorem,
  pointNonEqualitySymmetryTheorem,
} from '../../E/theorems/EqualityTheorems';
import { segmentSymmetryTheorem } from '../../E/theorems/MetricInferenceTheorems';
import { circleRadiiEqualTheorem } from '../../E/theorems/TransferInferenceTheorems';
import { JustifiedAssertionReferences } from '../../E/types/JustifiedAssertion';
import { circleAlpha, circleBeta } from '../constants/NamedCircles';
import { pointA, pointB, pointC } from '../constants/NamedPoints';
import { segmentAB, segmentBC, segmentCA } from '../constants/NamedSegments';

export const BookIProp1 = theorem(
  'I.1',
  [
    relationAssertion(pointsAreEqual(pointA, pointB), false),
  ],
  [pointC],
  [
    relationAssertion(segmentsAreEqual(segmentAB, segmentBC)),
    relationAssertion(segmentsAreEqual(segmentBC, segmentCA)),
  ],
);

export function proveBookIProp1(): JustifiedAssertionReferences {
  const assumptions = assumeAll(BookIProp1.antecedents);
  const pointANotEqualB = justifiedAssertionReference(assumptions, 0);

  const constructCircleAlphaStep = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(pointAtCenter, pointA),
      rename(pointOnCircle, pointB),
      rename(newCircle, circleAlpha),
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
      rename(pointAtCenter, pointB),
      rename(pointOnCircle, pointA),
      rename(newCircle, circleBeta),
    ]),
    [pointBNotEqualA],
  );
  const pointBCenterOfBeta = justifiedAssertionReference(constructCircleBetaStep, 0);
  const pointAOnBeta = justifiedAssertionReference(constructCircleBetaStep, 1);

  const pointAInsideAlphaStep = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(pointAtCenter, pointA),
      rename(circle1, circleAlpha),
    ]),
    [pointACenterOfAlpha],
  );
  const pointAInsideAlpha = justifiedAssertionReference(pointAInsideAlphaStep, 0);

  const pointBInsideBetaStep = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(pointAtCenter, pointB),
      rename(circle1, circleBeta),
    ]),
    [pointBCenterOfBeta],
  );
  const pointBInsideBeta = justifiedAssertionReference(pointBInsideBetaStep, 0);

  const circlesAlphaBetaIntersectStep = applyTheorem(
    theoremWithRenames(circlesMutuallyInsideIntersectTheorem, [
      rename(pointInsideCircle1, pointA),
      rename(pointInsideCircle2, pointB),
      rename(pointOnCircle1, pointB),
      rename(pointOnCircle2, pointA),
      rename(circle1, circleAlpha),
      rename(circle2, circleBeta),
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
      rename(circle1, circleAlpha),
      rename(circle1, circleBeta),
      rename(newPoint, pointC),
    ]),
    [
      circlesAlphaBetaIntersect,
    ],
  );
  const pointCOnAlpha = justifiedAssertionReference(constructAlphaBetaIntersectionPointStep, 0);
  const pointCOnBeta = justifiedAssertionReference(constructAlphaBetaIntersectionPointStep, 1);

  const segmentABEqualsACStep = applyTheorem(
    theoremWithRenames(circleRadiiEqualTheorem, [
      rename(pointAtCenter, pointA),
      rename(point1OnCircle, pointB),
      rename(point2OnCircle, pointC),
      rename(circle1, circleAlpha),
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
      rename(pointAtCenter, pointB),
      rename(point1OnCircle, pointA),
      rename(point2OnCircle, pointC),
      rename(circle1, circleBeta),
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
      rename(point1, pointA),
      rename(point2, pointB),
    ]),
    [],
  );
  const segmentABEqualsBA = justifiedAssertionReference(segmentABEqualsBAStep, 0);

  const segmentABEqualsBCStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(point1, pointA),
      rename(point2, pointB),
      rename(point3, pointB),
      rename(point4, pointA),
      rename(point5, pointB),
      rename(point6, pointC),
    ]),
    [
      segmentABEqualsBA,
      segmentBAEqualsBC,
    ],
  );
  const segmentABEqualsBC = justifiedAssertionReference(segmentABEqualsBCStep, 0);

  const segmentBCEqualsABStep = applyTheorem(
    theoremWithRenames(segmentEqualitySymmetryTheorem, [
      rename(point1, pointA),
      rename(point2, pointB),
      rename(point3, pointB),
      rename(point4, pointC),
    ]),
    [
      segmentABEqualsBC
    ],
  );
  const segmentBCEqualsAB = justifiedAssertionReference(segmentBCEqualsABStep, 0);

  const segmentACEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentSymmetryTheorem, [
      rename(point1, pointA),
      rename(point2, pointC),
    ]),
    [],
  );
  const segmentACEqualsCA = justifiedAssertionReference(segmentACEqualsCAStep, 0);

  const segmentABEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(point1, pointA),
      rename(point2, pointB),
      rename(point3, pointA),
      rename(point4, pointC),
      rename(point5, pointC),
      rename(point6, pointA),
    ]),
    [
      segmentABEqualsAC,
      segmentACEqualsCA,
    ],
  );
  const segmentABEqualsCA = justifiedAssertionReference(segmentABEqualsCAStep, 0);

  const segmentBCEqualsCAStep = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(point1, pointB),
      rename(point2, pointC),
      rename(point3, pointA),
      rename(point4, pointB),
      rename(point5, pointC),
      rename(point6, pointA),
    ]),
    [
      segmentBCEqualsAB,
      segmentABEqualsCA,
    ],
  );
  const segmentBCEqualsCA = justifiedAssertionReference(segmentBCEqualsCAStep, 0);

  return [segmentABEqualsBC, segmentBCEqualsCA];
}
