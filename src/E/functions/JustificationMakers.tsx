import { Assertion } from '../types/Assertion';
import {
  AssumptionJustification,
  CaseJustification,
  ContradictionJustification,
  Justification,
  JustificationType,
  SuperpositionJustification,
  SuperpositionType,
  SuppositionJustification,
  TheoremApplicationJustification,
} from '../types/Justification';
import { JustifiedAssertionReferences } from '../types/JustifiedAssertion';
import { TheoremWithRenames } from '../types/Theorem';

export const assumptionJustification: AssumptionJustification = {
  justificationType: JustificationType.Assumption,
};

export function caseJustification(
  supposition: Assertion,
  positiveCase: Justification,
  negativeCase: Justification,
): CaseJustification {
  return {
    justificationType: JustificationType.Case,
    supposition,
    positiveCase,
    negativeCase,
  };
}

export function contradictionJustification(
  supposition: Assertion,
  contradiction: Justification,
): ContradictionJustification {
  return {
    justificationType: JustificationType.Contradiction,
    supposition,
    contradiction,
  };
}

export function superpositionJustification(
  superpositionType: SuperpositionType,
): SuperpositionJustification {
  return {
    justificationType: JustificationType.Superposition,
    superpositionType,
  };
}

export const suppositionJustification: SuppositionJustification = {
  justificationType: JustificationType.Supposition,
};

export function theoremApplicationJustification(
  theorem: TheoremWithRenames,
  justifiedAntecedents: JustifiedAssertionReferences,
): TheoremApplicationJustification {
  return {
    justificationType: JustificationType.TheoremApplication,
    theorem,
    justifiedAntecedents,
  };
}
