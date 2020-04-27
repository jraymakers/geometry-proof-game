import { Formula } from './Formula';

export type ProofRule = Readonly<{
  // symbols of name terms in formula patterns are placeholders
  // can variables be placholders?
  inputFormulaPatterns: readonly Formula[];

  // step ids in subproof patterns are separate from the main proof; they must be mapped
  // any formulas in subproof patterns are formula patterns (see above)
  inputSubproofPatterns: readonly Proof[];

  // output formula pattern can only use placeholders used in input patterns
  outputFormulaPattern: Formula;
}>;

export type AssumptionProofStep = Readonly<{
  proofStepType: 'assumption';
  formula: Formula;
}>;

export type RuleApplicationProofStep = Readonly<{
  proofStepType: 'ruleApplication';
  rule: ProofRule;

  /** id of (previous) step (containing formula) for each input formula pattern in rule */
  inputFormulaSteps: string[];

  /** id of (previous) subproof step for each input subproof formula in rule */
  inputSubproofSteps: string[];

  // should this be explicit or implicit?
  // perhaps stored/cached separately?
  // formula: Formula;
}>;

export type SubproofProofStep = Readonly<{
  proofStepType: 'subproof';
  subproof: Proof;
}>;

export type ProofStep
  = AssumptionProofStep
  | RuleApplicationProofStep
  | SubproofProofStep
  ;

export type Proof = Readonly<{
  steps: { [id: string]: ProofStep };
}>;
