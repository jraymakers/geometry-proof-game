import { Cr } from '../constants/Cr';
import { Pt } from '../constants/Pt';
import {
  circlesIntersect,
  pointIsCenter,
  pointIsOnCircle,
  pointsNotEqual,
} from '../functions/Assertions';
import { Theorem } from '../types/Theorem';

// Lines and Circles #2
export const constructCircleTheorem: Theorem = {
  name: 'Construct Circle',
  forAll: [Pt.a, Pt.b],
  antecedents: [
    pointsNotEqual(Pt.a, Pt.b),
  ],
  thereExists: [Cr.α],
  consequents: [
    pointIsCenter(Pt.a, Cr.α),
    pointIsOnCircle(Pt.b, Cr.α),
  ],
};

// Intersections #6
export const constructCirclesIntersectionPointTheorem: Theorem = {
  name: 'Construct Circles Intersection Point',
  forAll: [Cr.α, Cr.β],
  antecedents: [
    circlesIntersect(Cr.α, Cr.β),
  ],
  thereExists: [Pt.c],
  consequents: [
    pointIsOnCircle(Pt.c, Cr.α),
    pointIsOnCircle(Pt.c, Cr.β),
  ],
};
