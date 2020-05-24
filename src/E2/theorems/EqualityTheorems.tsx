import { Pt } from '../constants/Pt';
import {
  pointsEqual,
  pointsNotEqual,
  segmentsEqual,
  segmentsNotEqual,
} from '../functions/Assertions';
import { seg } from '../functions/Exps';
import { Theorem } from '../types/Theorem';

export const PointEqualitySymmetryTheorem: Theorem = {
  name: 'Point Equality Symmetry',
  forAll: [Pt.a, Pt.b],
  antecedents: [
    pointsEqual(Pt.a, Pt.b),
  ],
  thereExists: [],
  consequents: [
    pointsEqual(Pt.b, Pt.a),
  ],
};

export const PointNonEqualitySymmetryTheorem: Theorem = {
  name: 'Point Non-Equality Symmetry',
  forAll: [Pt.a, Pt.b],
  antecedents: [
    pointsNotEqual(Pt.a, Pt.b),
  ],
  thereExists: [],
  consequents: [
    pointsNotEqual(Pt.b, Pt.a),
  ],
};

export const SegmentEqualitySymmetryTheorem: Theorem = {
  name: 'Segment Equality Symmetry',
  forAll: [Pt.a, Pt.b, Pt.c, Pt.d],
  antecedents: [
    segmentsEqual(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d)),
  ],
  thereExists: [],
  consequents: [
    segmentsEqual(seg(Pt.c, Pt.d), seg(Pt.a, Pt.b)),
  ],
};

export const SegmentNonEqualitySymmetryTheorem: Theorem = {
  name: 'Segment Non-Equality Symmetry',
  forAll: [Pt.a, Pt.b, Pt.c, Pt.d],
  antecedents: [
    segmentsNotEqual(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d)),
  ],
  thereExists: [],
  consequents: [
    segmentsNotEqual(seg(Pt.c, Pt.d), seg(Pt.a, Pt.b)),
  ],
};

export const SegmentEqualityTransitivityTheorem: Theorem = {
  name: 'Segment Equality Transitivity',
  forAll: [Pt.a, Pt.b, Pt.c, Pt.d, Pt.e, Pt.f],
  antecedents: [
    segmentsEqual(seg(Pt.a, Pt.b), seg(Pt.c, Pt.d)),
    segmentsEqual(seg(Pt.c, Pt.d), seg(Pt.e, Pt.f)),
  ],
  thereExists: [],
  consequents: [
    segmentsEqual(seg(Pt.a, Pt.b), seg(Pt.e, Pt.f)),
  ],
};
