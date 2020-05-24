import { Pt } from '../constants/Pt';
import { segmentsEqual } from '../functions/Assertions';
import { seg } from '../functions/Exps';
import { Theorem } from '../types/Theorem';

// #3: ab=ba
export const segmentSymmetryTheorem: Theorem = {
  name: 'Segment Symmetry',
  forAll: [Pt.a, Pt.b],
  antecedents: [],
  thereExists: [],
  consequents: [
    segmentsEqual(seg(Pt.a, Pt.b), seg(Pt.b, Pt.a)),
  ],
};
