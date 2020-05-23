import { Assertion, AssertionList } from '../types/Assertion';
import { Elem, ElemList } from '../types/Elem';
import { Exp, ExpList } from '../types/Exp';
import { Theorem } from '../types/Theorem';
import { elemExp, funcExp, isElemExp } from './Exps';

export type Renames = Readonly<{
  [name: string]: string;
}>;

export function renameTheoremElems(theorem: Theorem, renames: Renames): Theorem {
  return {
    name: theorem.name,
    forAll: renameElems(theorem.forAll, renames),
    antecedents: renameAssertionListElems(theorem.antecedents, renames),
    thereExists: renameElems(theorem.thereExists, renames),
    consequents: renameAssertionListElems(theorem.antecedents, renames),
  };
}

export function renameAssertionListElems(assertions: AssertionList, renames: Renames): AssertionList {
  return assertions.map(assertion => renameAssertionElems(assertion, renames));
}

export function renameAssertionElems(assertion: Assertion, renames: Renames): Assertion {
  return {
    relation: assertion.relation,
    args: renameExpListElems(assertion.args, renames),
    positive: assertion.positive,
  };
}

export function renameExpListElems(exps: ExpList, renames: Renames): ExpList {
  return exps.map(exp => renameExpElems(exp, renames));
}

export function renameExpElems(exp: Exp, renames: Renames): Exp {
  if (isElemExp(exp)) {
    return elemExp(renameElem(exp.elem, renames));
  }
  return funcExp(exp.func, ...renameExpListElems(exp.args, renames));
}

export function renameElems(elems: ElemList, renames: Renames): ElemList {
  return elems.map(elem => renameElem(elem, renames));
}

export function renameElem(elem: Elem, renames: Renames): Elem {
  return {
    sort: elem.sort,
    name: renames[elem.name] || elem.name,
  };
}
