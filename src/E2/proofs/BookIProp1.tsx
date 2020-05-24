/* eslint-disable @typescript-eslint/camelcase */
import { Name } from '../constants/Name';
import { Pt } from '../constants/Pt';
import { pointsNotEqual, segmentsEqual } from '../functions/Assertions';
import { seg } from '../functions/Exps';
import { assumeAntecedents, proofStep } from '../functions/Proofs';
import {
  ConstructCirclesIntersectionPointTheorem,
  ConstructCircleTheorem,
} from '../theorems/ConstructionTheorems';
import {
  CenterInsideTheorem,
  CirclesMutuallyInsideIntersectTheorem,
} from '../theorems/DiagrammaticInferenceTheorems';
import {
  PointNonEqualitySymmetryTheorem,
  SegmentEqualitySymmetryTheorem,
  SegmentEqualityTransitivityTheorem,
} from '../theorems/EqualityTheorems';
import { SegmentSymmetryTheorem } from '../theorems/MetricInferenceTheorems';
import { CircleRadiiEqualTheorem } from '../theorems/TransferInferenceTheorems';
import { ProvedAssertionList } from '../types/Proof';
import { Theorem } from '../types/Theorem';

export const BookIProp1: Theorem = {
  name: 'I.1',
  forAll: [Pt.a, Pt.b],
  antecedents: [
    pointsNotEqual(Pt.a, Pt.b),
  ],
  thereExists: [Pt.c],
  consequents: [
    segmentsEqual(seg(Pt.a, Pt.b), seg(Pt.b, Pt.c)),
    segmentsEqual(seg(Pt.b, Pt.c), seg(Pt.c, Pt.a)),
  ],
};

export function proveBookIProp1(): ProvedAssertionList {
  const [ a_ne_b ] = assumeAntecedents(BookIProp1);

  const [ center_a_α, on_b_α ] = proofStep(ConstructCircleTheorem, [ a_ne_b ]);

  const [ b_ne_a ] = proofStep(PointNonEqualitySymmetryTheorem, [ a_ne_b ]);

  const [ center_b_β, on_a_β ] = proofStep(ConstructCircleTheorem, [ b_ne_a ],
    { [Name.a]: Name.b, [Name.b]: Name.a, [Name.α]: Name.β });

  const [ inside_a_α ] = proofStep(CenterInsideTheorem, [ center_a_α ]);

  const [ inside_b_β ] = proofStep(CenterInsideTheorem, [ center_b_β ]);

  const [ intersect_α_β ] = proofStep(CirclesMutuallyInsideIntersectTheorem,
    [ on_b_α, inside_a_α, on_a_β, inside_b_β ],
    { [Name.a]: Name.b, [Name.b]: Name.a });

  const [ on_c_α, on_c_β ] = proofStep(ConstructCirclesIntersectionPointTheorem, [ intersect_α_β ]);

  const [ ab_eq_ac ] = proofStep(CircleRadiiEqualTheorem, [ center_a_α, on_b_α, on_c_α ]);

  const [ ba_eq_bc ] = proofStep(CircleRadiiEqualTheorem, [ center_b_β, on_a_β, on_c_β ],
    { [Name.a]: Name.b, [Name.b]: Name.a, [Name.α]: Name.β });

  const [ ab_eq_ba ] = proofStep(SegmentSymmetryTheorem, []);

  const [ ab_eq_bc ] = proofStep(SegmentEqualityTransitivityTheorem, [ ab_eq_ba, ba_eq_bc ],
    { [Name.c]: Name.b, [Name.d]: Name.a, [Name.e]: Name.b, [Name.f]: Name.c });
  
  const [ bc_eq_ab ] = proofStep(SegmentEqualitySymmetryTheorem, [ ab_eq_bc ],
    { [Name.c]: Name.b, [Name.d]: Name.c });
  
  const [ ac_eq_ca ] = proofStep(SegmentSymmetryTheorem, [], { [Name.b]: Name.c });

  const [ ab_eq_ca ] = proofStep(SegmentEqualityTransitivityTheorem, [ ab_eq_ac, ac_eq_ca ],
    { [Name.c]: Name.a, [Name.d]: Name.c, [Name.e]: Name.c, [Name.f]: Name.a });
  
  const [ bc_eq_ca ] = proofStep(SegmentEqualityTransitivityTheorem, [ bc_eq_ab, ab_eq_ca ],
    {
      [Name.a]: Name.b, [Name.b]: Name.c,
      [Name.c]: Name.a, [Name.d]: Name.b,
      [Name.e]: Name.c, [Name.f]: Name.a,
    }
  );

  return [ ab_eq_bc, bc_eq_ca ];
}
