import { Elem } from '../types/Elem';
import { ElemExp, Exp, ExpList, FuncExp } from '../types/Exp';
import { Func } from '../types/Func';
import { Sort } from '../types/Sort';

export function elemExp(elem: Elem): ElemExp {
  return { elem };
}

export function funcExp(func: Func, ...args: ExpList): FuncExp {
  return { func, args };
}

export function isElemExp(exp: Exp): exp is ElemExp {
  return !!(exp as ElemExp).elem;
}

export function isFuncExp(exp: Exp): exp is FuncExp {
  return !!(exp as FuncExp).func;
}

export function expSort(exp: Exp): Sort {
  if (isElemExp(exp)) {
    return exp.elem.sort;
  }
  return exp.func.returnSort;
}
