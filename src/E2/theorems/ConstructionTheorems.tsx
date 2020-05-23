import { CircleSort, PointSort } from '../constants/Sorts';
import { pointCenterPat, pointOnCirclePat, pointsNotEqualPat } from '../functions/AssertionPats';
import { pointCenter, pointOnCircle, pointsNotEqual } from '../functions/Assertions';
import { circlePat, pointPat } from '../functions/ElemPats';
import { circle, point } from '../functions/Elems';
import { renameTheoremElems } from '../functions/Renames';
import { Theorem, Theorem2 } from '../types/Theorem';
import { TheoremPat } from '../types/TheoremPat';

export function newConstructCircleTheoremPat(): TheoremPat {
  const a = pointPat;
  const b = pointPat;
  const alpha = circlePat;
  return {
    name: 'Construct Circle',
    forAll: [PointSort, PointSort],
    antecedents: [
      pointsNotEqualPat(a, b),
    ],
    thereExists: [CircleSort],
    consequents: [
      pointCenterPat(a, alpha),
      pointOnCirclePat(b, alpha),
    ],
  };
}

export const constructCircleTheoremPat = newConstructCircleTheoremPat();

export function newConstructCircleTheorem(...names: readonly string[]): Theorem {
  const a = point(names[0]);
  const b = point(names[1]);
  const alpha = circle(names[2]);
  return {
    name: 'Construct Circle',
    forAll: [a, b],
    antecedents: [
      pointsNotEqual(a, b),
    ],
    thereExists: [alpha],
    consequents: [
      pointCenter(a, alpha),
      pointOnCircle(b, alpha),
    ],
  };
}

export const constructCircleTheorem = newConstructCircleTheorem('a', 'b', 'alpha');

export const renamedConstructCircleTheorem =
  renameTheoremElems(constructCircleTheorem, {'a': 'b', 'b': 'a', 'alpha': 'beta'});

export function newConstructCircleTheorem2(): Theorem2 {
  const a = point('a');
  const b = point('b');
  const alpha = circle('alpha');
  return {
    name: 'Construct Circle',
    forAll: {
      'a': PointSort,
      'b': PointSort,
    },
    antecedents: [
      pointsNotEqual(a, b),
    ],
    thereExists: {
      'alpha': CircleSort,
    },
    consequents: [
      pointCenter(a, alpha),
      pointOnCircle(b, alpha),
    ],
  };
}
