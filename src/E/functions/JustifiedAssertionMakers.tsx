import { Assertion, AssertionList } from '../types/Assertion';
import {
  JustifiedAssertionReference,
  JustifiedAssertionReferences,
  JustifiedAssertions,
} from '../types/JustifiedAssertion';
import { Theorem } from '../types/Theorem';
import { assumptionJustification, theoremApplicationJustification } from './JustificationMakers';
import { VariableRenameList } from '../types/VariableRename';

export function justifiedAssertionReference(
  justifiedAssertions: JustifiedAssertions,
  index: number,
): JustifiedAssertionReference {
  return {
    justifiedAssertions,
    index,
  };
}

export function assume(assertion: Assertion): JustifiedAssertions {
  return {
    assertions: [assertion],
    justification: assumptionJustification,
  };
}

export function assumeAll(assertions: AssertionList): JustifiedAssertions {
  return {
    assertions,
    justification: assumptionJustification,
  }
}

export function applyTheorem(
  theorem: Theorem,
  justifiedAntecedents: JustifiedAssertionReferences,
  renames: VariableRenameList = [],
): JustifiedAssertions {
  const assertions: AssertionList = []; // todo
  const justification = theoremApplicationJustification(
    theorem,
    renames,
    justifiedAntecedents,
  );
  return {
    assertions,
    justification,
  };
}
