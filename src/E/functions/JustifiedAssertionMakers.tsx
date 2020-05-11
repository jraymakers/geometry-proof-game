import { Assertion, AssertionList } from '../types/Assertion';
import {
  JustifiedAssertionReference,
  JustifiedAssertionReferences,
  JustifiedAssertions,
} from '../types/JustifiedAssertion';
import { TheoremWithRenames } from '../types/Theorem';
import { assumptionJustification, theoremApplicationJustification } from './JustificationMakers';

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
  theorem: TheoremWithRenames,
  justifiedAntecedents: JustifiedAssertionReferences,
): JustifiedAssertions {
  const assertions: AssertionList = []; // todo
  const justification = theoremApplicationJustification(
    theorem,
    justifiedAntecedents,
  );
  return {
    assertions,
    justification,
  };
}
