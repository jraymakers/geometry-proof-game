import { ElemPat } from '../types/ElemPat';
import { ElemExpPat, ExpPat, FuncExpPat } from '../types/ExpPat';
import { Func } from '../types/Func';
import { Sort } from '../types/Sort';

export function elemExpPat(elem: ElemPat): ElemExpPat {
  return { elem };
}

export function funcExpPat(func: Func, ...args: readonly ExpPat[]): FuncExpPat {
  return { func, args };
}

export function isElemExpPat(exp: ExpPat): exp is ElemExpPat {
  return !!(exp as ElemExpPat).elem;
}

export function isFuncExpPat(exp: ExpPat): exp is FuncExpPat {
  return !!(exp as FuncExpPat).func;
}

export function expPatSort(exp: ExpPat): Sort {
  if (isElemExpPat(exp)) {
    return exp.elem.sort;
  }
  return exp.func.returnSort;
}
