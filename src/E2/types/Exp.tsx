import { Elem } from './Elem';
import { Func } from './Func';

export type ElemExp = Readonly<{
  elem: Elem;
}>;

export type FuncExp = Readonly<{
  func: Func;
  args: ExpList;
}>;

export type Exp = ElemExp | FuncExp;

export type ExpList = readonly Exp[];
