import { circle1, circle2, newCircle } from '../../E/constants/SemanticCircles';
import {
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
import { constructCircleTheorem } from '../../E/theorems/ConstructionTheorems';
import {
  centerInsideTheorem,
  circlesMutuallyInsideIntersect,
} from '../../E/theorems/DiagrammaticInferenceTheorems';
import { JustifiedAssertionReferences } from '../../E/types/JustifiedAssertion';
import { circleAlpha, circleBeta } from '../constants/NamedCircles';
import { pointA, pointB } from '../constants/NamedPoints';
import { segmentAB, segmentBC, segmentCA } from '../constants/NamedSegments';

export const BookIProp1 = theorem(
  [
    relationAssertion(pointsAreEqual(pointA, pointB), false),
  ],
  [
    relationAssertion(segmentsAreEqual(segmentAB, segmentBC)),
    relationAssertion(segmentsAreEqual(segmentBC, segmentCA)),
  ],
);

export function proveBookIProp1(): JustifiedAssertionReferences {
  const assumptions = assumeAll(BookIProp1.antecedents);
  const equalPointsAB = justifiedAssertionReference(assumptions, 0);

  const constructCircleAlphaStep = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(pointAtCenter, pointA),
      rename(pointOnCircle, pointB),
      rename(newCircle, circleAlpha),
    ]),
    [equalPointsAB],
  );
  const pointACenterOfAlpha = justifiedAssertionReference(constructCircleAlphaStep, 0);
  const pointBOnAlpha = justifiedAssertionReference(constructCircleAlphaStep, 1);

  const constructCircleBetaStep = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(pointAtCenter, pointB),
      rename(pointOnCircle, pointA),
      rename(newCircle, circleBeta),
    ]),
    [equalPointsAB],
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
    theoremWithRenames(circlesMutuallyInsideIntersect, [
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
    ]
  );
  const circlesAlphaBetaIntersect = justifiedAssertionReference(circlesAlphaBetaIntersectStep, 0);

  return [];
}
