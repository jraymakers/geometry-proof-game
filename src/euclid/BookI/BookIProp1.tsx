/* eslint-disable @typescript-eslint/camelcase */
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
  const a_ne_b = justifiedAssertionReference(assumptions, 0);

  const construct_circle_α_step = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Cr.α, Cr.α),
    ]),
    [a_ne_b],
  );
  const center_a_α = justifiedAssertionReference(construct_circle_α_step, 0);
  const on_b_α = justifiedAssertionReference(construct_circle_α_step, 1);

  const b_ne_a_step = applyTheorem(
    theoremWithRenames(pointNonEqualitySymmetryTheorem),
    [a_ne_b],
  );
  const b_ne_a = justifiedAssertionReference(b_ne_a_step, 0);

  const construct_circle_β_step = applyTheorem(
    theoremWithRenames(constructCircleTheorem, [
      rename(Pt.a, Pt.b),
      rename(Pt.b, Pt.a),
      rename(Cr.α, Cr.β),
    ]),
    [b_ne_a],
  );
  const center_b_β = justifiedAssertionReference(construct_circle_β_step, 0);
  const on_a_β = justifiedAssertionReference(construct_circle_β_step, 1);

  const inside_a_α_step = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(Pt.a, Pt.a),
      rename(Cr.α, Cr.α),
    ]),
    [center_a_α],
  );
  const inside_a_α = justifiedAssertionReference(inside_a_α_step, 0);

  const inside_b_β_step = applyTheorem(
    theoremWithRenames(centerInsideTheorem, [
      rename(Pt.a, Pt.b),
      rename(Cr.α, Cr.β),
    ]),
    [center_b_β],
  );
  const inside_b_β = justifiedAssertionReference(inside_b_β_step, 0);

  const intersect_α_β_step = applyTheorem(
    theoremWithRenames(circlesMutuallyInsideIntersectTheorem, [
      rename(Pt.b, Pt.a),
      rename(Pt.a, Pt.b),
      rename(Cr.α, Cr.α),
      rename(Cr.β, Cr.β),
    ]),
    [
      on_b_α,
      inside_a_α,
      on_a_β,
      inside_b_β,
    ],
  );
  const intersect_α_β = justifiedAssertionReference(intersect_α_β_step, 0);

  const construct_α_β_intersection_point_step = applyTheorem(
    theoremWithRenames(constructCircleCircleIntersectionPointTheorem, [
      rename(Cr.α, Cr.α),
      rename(Cr.β, Cr.β),
      rename(Pt.c, Pt.c),
    ]),
    [
      intersect_α_β,
    ],
  );
  const on_c_α = justifiedAssertionReference(construct_α_β_intersection_point_step, 0);
  const on_c_β = justifiedAssertionReference(construct_α_β_intersection_point_step, 1);

  const ab_eq_ac_step = applyTheorem(
    theoremWithRenames(circleRadiiEqualTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.c),
      rename(Cr.α, Cr.α),
    ]),
    [
      center_a_α,
      on_b_α,
      on_c_α,
    ],
  );
  const ab_eq_ac = justifiedAssertionReference(ab_eq_ac_step, 0);

  const ba_eq_bc_step = applyTheorem(
    theoremWithRenames(circleRadiiEqualTheorem, [
      rename(Pt.a, Pt.b),
      rename(Pt.b, Pt.a),
      rename(Pt.c, Pt.c),
      rename(Cr.α, Cr.β),
    ]),
    [
      center_b_β,
      on_a_β,
      on_c_β,
    ],
  );
  const ba_eq_bc = justifiedAssertionReference(ba_eq_bc_step, 0);

  const ab_eq_ba_step = applyTheorem(
    theoremWithRenames(segmentSymmetryTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
    ]),
    [],
  );
  const ab_eq_ba = justifiedAssertionReference(ab_eq_ba_step, 0);

  const ab_eq_bc_step = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.b),
      rename(Pt.d, Pt.a),
      rename(Pt.e, Pt.b),
      rename(Pt.f, Pt.c),
    ]),
    [
      ab_eq_ba,
      ba_eq_bc,
    ],
  );
  const ab_eq_bc = justifiedAssertionReference(ab_eq_bc_step, 0);

  const bc_eq_ab_step = applyTheorem(
    theoremWithRenames(segmentEqualitySymmetryTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.b),
      rename(Pt.d, Pt.c),
    ]),
    [
      ab_eq_bc
    ],
  );
  const bc_eq_ab = justifiedAssertionReference(bc_eq_ab_step, 0);

  const ac_eq_ca_step = applyTheorem(
    theoremWithRenames(segmentSymmetryTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.c),
    ]),
    [],
  );
  const ac_eq_ca = justifiedAssertionReference(ac_eq_ca_step, 0);

  const ab_eq_ca_step = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(Pt.a, Pt.a),
      rename(Pt.b, Pt.b),
      rename(Pt.c, Pt.a),
      rename(Pt.d, Pt.c),
      rename(Pt.e, Pt.c),
      rename(Pt.f, Pt.a),
    ]),
    [
      ab_eq_ac,
      ac_eq_ca,
    ],
  );
  const ab_eq_ca = justifiedAssertionReference(ab_eq_ca_step, 0);

  const bc_eq_ca_step = applyTheorem(
    theoremWithRenames(segmentEqualityTransitivityTheorem, [
      rename(Pt.a, Pt.c),
      rename(Pt.b, Pt.c),
      rename(Pt.c, Pt.a),
      rename(Pt.d, Pt.b),
      rename(Pt.e, Pt.c),
      rename(Pt.f, Pt.a),
    ]),
    [
      bc_eq_ab,
      ab_eq_ca,
    ],
  );
  const bc_eq_ca = justifiedAssertionReference(bc_eq_ca_step, 0);

  return [ab_eq_bc, bc_eq_ca];
}
