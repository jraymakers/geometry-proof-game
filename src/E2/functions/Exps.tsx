import {
  AddAnglesFunc,
  AddAreasFunc,
  AddSegmentsFunc,
  AngleFunc,
  AreaFunc,
  RightAngleConst,
  SegmentFunc,
  ZeroAngleConst,
  ZeroAreaConst,
  ZeroSegmentConst,
} from '../constants/Funcs';
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

export function seg(a: Elem, b: Elem): FuncExp {
  return funcExp(SegmentFunc, elemExp(a), elemExp(b));
}

export function angle(a: Elem, b: Elem, c: Elem): FuncExp {
  return funcExp(AngleFunc, elemExp(a), elemExp(b), elemExp(c));
}

export function area(a: Elem, b: Elem, c: Elem): FuncExp {
  return funcExp(AreaFunc, elemExp(a), elemExp(b), elemExp(c));
}

export function addSegs(ab: FuncExp, cd: FuncExp): FuncExp {
  return funcExp(AddSegmentsFunc, ab, cd);
}

export function addAngles(abc: FuncExp, def: FuncExp): FuncExp {
  return funcExp(AddAnglesFunc, abc, def);
}

export function addAreas(abc: FuncExp, def: FuncExp): FuncExp {
  return funcExp(AddAreasFunc, abc, def);
}

export const zeroSeg = funcExp(ZeroSegmentConst);
export const zeroAngle = funcExp(ZeroAngleConst);
export const rightAngle = funcExp(RightAngleConst);
export const zeroArea = funcExp(ZeroAreaConst);
