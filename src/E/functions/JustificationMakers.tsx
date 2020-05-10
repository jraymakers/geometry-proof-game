import { Assertion } from '../types/Assertion';
import {
  AssumptionJustification,
  CaseJustification,
  ContradictionJustification,
  Justification,
  JustificationType,
  SuppositionJustification,
  SuperpositionJustification,
  SuperpositionType,
  TheoremApplicationJustification,
} from '../types/Justification';
import { JustifiedAssertionList } from '../types/JustifiedAssertion';
import { Theorem } from '../types/Theorem';
import { VariableRenameList } from '../types/VariableRename';

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
  theorem: Theorem,
  renames: VariableRenameList,
  justifiedAntecedents: JustifiedAssertionList,
): TheoremApplicationJustification {
  return {
    justificationType: JustificationType.TheoremApplication,
    theorem,
    renames,
    justifiedAntecedents,
  };
}
