import { Proof, ProvedAssertionList } from '../types/Proof';
import { Theorem } from '../types/Theorem';
import { Renames, renameTheoremElems } from './Renames';

export function prove(
  theorem: Theorem,
  provedAntecedents: ProvedAssertionList,
  renames?: Renames,
): Proof {
  // can these renames be derived from the proved antecedents?
  const renamed = renames ? renameTheoremElems(theorem, renames) : theorem;
  return {
    theorem: renamed,
    provedAntecedents,
  };
}

export function proofStep(
  theorem: Theorem,
  provedAntecedents: ProvedAssertionList,
  renames?: Renames,
): ProvedAssertionList {
  const proof = prove(theorem, provedAntecedents, renames);
  return proof.theorem.consequents.map((_, index) => ({ proof, index }));
}

export function assumeAntecedents(theorem: Theorem): ProvedAssertionList {
  const assume: Theorem = {
    name: 'Assume',
    forAll: [],
    antecedents: [],
    thereExists: theorem.forAll,
    consequents: theorem.antecedents,
  };
  return proofStep(assume, []);
}
