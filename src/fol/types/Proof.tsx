import { Formula } from './Formula';
import { FormulaPattern } from './FormulaPattern';

// need ways to express:
// constraint: formula contains constant c
//  - used in existential introduction
// constraint: formula does not contain constant c
//  - used in existential elimination
// constraint: formula does not contain variable x
//  - used in existential introduction
//  - used in universal introduction
// formula that is another formula but:
//  - with all instances of variable x replaced with constant c
//  - used in universal elimination
// formula that is another formula but:
//  - with some or all instance of constant c replaced with variable x
//  - (the other formula must contain at least one instance of constant c)
//  - (the other formula must not contain variable x)
//  - used in existential introduction
// constraint: constant c must not occur in any undischarged assumption, from the context of some given step
//  - (that is, any assumption step in this proof or a parent proof (subproofs are ok)
//  - used in universal introduction
//  - used in existential elimination
// formula that is another formula but:
//  - with some or all instances of constant a replaced with constant b
//  - used in identity elimintation

// -> can the "some or all" substitutions be expressed as constraints?
// -> can the whole rule be expressed as constraints?
// perhaps:
// - constraint: formula matches pattern
// - constraint: subproof matches pattern

// rule has a set of inputs, each with a name
// inputs are of three types:
//  - formula inputs, which just refer to a previous step (assumption or application, not subproof)
//  - subproof inputs, which are really multiple inputs:
//    - the formula in the subproof assumption
//    - one (or more?) formulas in the subproof's conclusions
//    - in other words, a subproof input must also specify one (or more) sub formulas
// - identifiers of variables or constants, to be used in constraints
// there don't appear to be any rules that refer to multiple subproof conclusions,
// and there don't appear to be any rules that refer to subproofs in subproofs

// rule also has an output has a special name

// rule specifies constraint on the inputs, as well as on the output
// inputs must be associated with a previous step in the application
// application must also specify the output formula
// application is valid if all constraints are met

// constraints:
// - formula matches pattern
//   - formula pattern is like formula but
//     - with no predicates
//     - leaves are named formulas (input or output)
//     - quantified variables are references to names given in input
//   - note that input formula could be a subproof assumption or conclusion
// - formula contains or does not contain a given term (constant or variable)
// - formula is a substitution instance of another formula, either an "all" or "some" variant
//   - need:
//      - replace all instances of variable x with constant c
//      - replace some instances of constant c with variable x
//      - replace some instances of constant a with constant b
// - constant c must not occur in any undischarged assumption, from given step
// - given two formulas, one is assumption and one is conclusion of the same subproof
// - implicit: all input formulas and subproofs are in scope

export type FormulaContainsConstantProofRuleConstraint = Readonly<{
  proofRuleConstraintType: 'FormulaContainsConstant';
  formulaId: string;
  constantId: string;
}>;

export type FormulaDoesNotContainConstantProofRuleConstraint = Readonly<{
  proofRuleConstraintType: 'FormulaDoesNotContainConstant';
  formulaId: string;
  constantId: string;
}>;

export type FormulaDoesNotContainVariableProofRuleConstraint = Readonly<{
  proofRuleConstraintType: 'FormulaDoesNotContainVariable';
  formulaId: string;
  variableId: string;
}>;

export type FormulaIsSubstitutionOfAllVariableInstancesWithConstantProofRuleConstraint = Readonly<{
  proofRuleConstraintType: 'FormulaIsSubstitutionOfAllVariableInstancesWithConstant';
  sourceFormulaId: string;
  targetFormulaId: string;
  sourceVariableId: string;
  targetConstantId: string;
}>;

export type FormulaIsSubstitutionOfSomeConstantInstancesWithVariableProofRuleConstraint = Readonly<{
  proofRuleConstraintType: 'FormulaIsSubstitutionOfSomeConstantInstancesWithVariable';
  sourceFormulaId: string;
  targetFormulaId: string;
  sourceConstantId: string;
  targetVariableId: string;
}>;

export type FormulaIsSubstitutionOfSomeConstantInstancesWithConstantProofRuleConstraint = Readonly<{
  proofRuleConstraintType: 'FormulaIsSubstitutionOfSomeConstantInstancesWithConstant';
  sourceFormulaId: string;
  targetFormulaId: string;
  sourceConstantId: string;
  targetConstantId: string;
}>;

export type ConstantMustNotOccurInUndischargedAssumptionProofRuleConstraint = Readonly<{
  constantId: string;
  formulaId: string; // formula from which to check
}>;

export type FormulasAreSubproofAssumptionAndConclusionProofRuleConstraint = Readonly<{
  assumptionFormulaId: string;
  conclusionFormulaId: string;
}>;

export type FormulasMatchesPatternProofRuleConstraint = Readonly<{
  formulaId: string;
  formulaPattern: FormulaPattern;
}>;

export type ProofRuleConstraint
  = FormulaContainsConstantProofRuleConstraint
  | FormulaDoesNotContainConstantProofRuleConstraint
  | FormulaDoesNotContainVariableProofRuleConstraint
  | FormulaIsSubstitutionOfAllVariableInstancesWithConstantProofRuleConstraint
  | FormulaIsSubstitutionOfSomeConstantInstancesWithVariableProofRuleConstraint
  | FormulaIsSubstitutionOfSomeConstantInstancesWithConstantProofRuleConstraint
  | ConstantMustNotOccurInUndischargedAssumptionProofRuleConstraint
  | FormulasAreSubproofAssumptionAndConclusionProofRuleConstraint
  | FormulasMatchesPatternProofRuleConstraint
  ;

export type ProofRule = Readonly<{
  name: string;

  // symbols of name terms in formula patterns are placeholders
  // can variables be placholders?
  // inputFormulaPatterns: readonly Formula[];

  // step ids in subproof patterns are separate from the main proof; they must be mapped
  // any formulas in subproof patterns are formula patterns (see above)
  // inputSubproofPatterns: readonly Proof[];

  // output formula pattern can only use placeholders used in input patterns
  // outputFormulaPattern: Formula;

  // inputFormulaIds: { readonly [formulaId: string]: true };
  // inputSubproofIds: { readonly [subproofId: string]: true };
  // inputConstantIds: { readonly [constantId: string]: true };
  // inputVariableIds: { readonly [variableId: string]: true };
  // inputTermIds: { readonly [termId: string]: true };

  // OR

  inputTypes: { readonly [inputId: string]: ProofRuleInputType };
  constraints: readonly ProofRuleConstraint[];
}>;

export type LocalFormulaReference = Readonly<{
  formulaReferenceType: 'local';
  formulaType: 'assumption' | 'conclusion';
  formulaIndex: number; // index or ids?
}>;

export type ParentProofFormulaReference = Readonly<{
  formulaReferenceType: 'parentProof';
  referenceFromParentProof: FormulaReference;
}>;

export type SubproofFormulaReference = Readonly<{
  formulaReferenceType: 'subproof';
  subproofIndex: number; // index or ids?
  referenceFromSubproof: FormulaReference;
}>;

export type FormulaReference
  = LocalFormulaReference
  | ParentProofFormulaReference
  | SubproofFormulaReference
  ;

export type FormulaReferenceProofRuleInput = Readonly<{
  proofRuleInputType: 'formulaReference';
  formulaReference: FormulaReference;
}>;

export type SubproofFormulasProofRuleInput = Readonly<{
  proofRuleInputType: 'subproofFormulas';
  subproofIndex: FormulaReference;
  assumptionIndex: number; // index or ids?
  conclusionIndex: number; // index or ids?
}>;

export type ConstantNameProofRuleInput = Readonly<{
  proofRuleInputType: 'constantName';
  constantName: string;
}>;

export type VariableNameProofRuleInput = Readonly<{
  proofRuleInputType: 'variableName';
  variableName: string;
}>;

export type ProofRuleInput
  = FormulaReferenceProofRuleInput
  | ConstantNameProofRuleInput
  | VariableNameProofRuleInput
  ;

export type ProofRuleInputType = ProofRuleInput['proofRuleInputType'];

export type RuleApplicationProofStep = Readonly<{
  proofStepType: 'ruleApplication';
  parentProof: Proof;
  rule: ProofRule;
  inputs: { [inputId: string]: ProofRuleInput };
  formula: Formula;
}>;

export type SubproofProofStep = Readonly<{
  proofStepType: 'subproof';
  parentProof: Proof;
  subproof: Proof;
}>;

export type ProofStep
  = RuleApplicationProofStep
  | SubproofProofStep
  ;

export type Proof = Readonly<{
  assumptions: readonly Formula[]; // index or ids?
  conclusions: readonly ProofStep[]; // index or ids?
}>;
