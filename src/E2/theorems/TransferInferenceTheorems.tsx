import { Cr } from '../constants/Cr';
import { Pt } from '../constants/Pt';
import { pointIsCenter, pointIsOnCircle, segmentsEqual } from '../functions/Assertions';
import { seg } from '../functions/Exps';
import { Theorem } from '../types/Theorem';

// Diagram-Segment Transfer Axioms #3 (forward)
export const circleRadiiEqualTheorem: Theorem = {
  name: 'Circle Radii Equal',
  forAll: [Pt.a, Pt.b, Pt.c, Cr.α],
  antecedents: [
    pointIsCenter(Pt.a, Cr.α),
    pointIsOnCircle(Pt.b, Cr.α),
    pointIsOnCircle(Pt.c, Cr.α),
  ],
  thereExists: [],
  consequents: [
    segmentsEqual(seg(Pt.a, Pt.b), seg(Pt.a, Pt.c)),
  ],
};
