import { Cr } from '../constants/Cr';
import { Name } from '../constants/Name';
import { Pt } from '../constants/Pt';
import { pointCenter, pointOnCircle, pointsNotEqual } from '../functions/Assertions';
import { renameTheoremElems } from '../functions/Renames';
import { Theorem } from '../types/Theorem';

export const constructCircleTheorem: Theorem = {
  name: 'Construct Circle',
  forAll: [Pt.a, Pt.b],
  antecedents: [
    pointsNotEqual(Pt.a, Pt.b),
  ],
  thereExists: [Cr.α],
  consequents: [
    pointCenter(Pt.a, Cr.α),
    pointOnCircle(Pt.b, Cr.α),
  ],
};

export const renamedConstructCircleTheorem = renameTheoremElems(constructCircleTheorem, {
  [Name.a]: Name.b,
  [Name.b]: Name.a,
  [Name.α]: Name.β,
});
