import { ElemPat } from './ElemPat';
import { Func } from './Func';

export type ElemExpPat = Readonly<{
  elem: ElemPat;
}>;

export type FuncExpPat = Readonly<{
  func: Func;
  args: readonly ExpPat[];
}>;

export type ExpPat = ElemExpPat | FuncExpPat;
