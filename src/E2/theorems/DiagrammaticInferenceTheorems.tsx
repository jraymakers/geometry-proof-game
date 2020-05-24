import { Cr } from '../constants/Cr';
import { Pt } from '../constants/Pt';
import {
  circlesIntersect,
  pointIsCenter,
  pointIsInside,
  pointIsOnCircle,
} from '../functions/Assertions';
import { Theorem } from '../types/Theorem';

// Generalities #3
export const CenterInsideTheorem: Theorem = {
  name: 'Center Inside',
  forAll: [Pt.a, Cr.α],
  antecedents: [
    pointIsCenter(Pt.a, Cr.α),
  ],
  thereExists: [],
  consequents: [
    pointIsInside(Pt.a, Cr.α),
  ],
};


// Intersection Axioms #5
export const CirclesMutuallyInsideIntersectTheorem: Theorem = {
  name: 'Circles Mutally Inside Intersect',
  forAll: [Pt.a, Pt.b, Cr.α, Cr.β],
  antecedents: [
    pointIsOnCircle(Pt.a, Cr.α),
    pointIsInside(Pt.b, Cr.α),
    pointIsOnCircle(Pt.b, Cr.β),
    pointIsInside(Pt.a, Cr.β),
  ],
  thereExists: [],
  consequents: [
    circlesIntersect(Cr.α, Cr.β),
  ],
};
