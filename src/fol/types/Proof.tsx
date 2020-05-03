import { Formula } from './Formula';

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
// - constant c must not occur in any undischanged assumption, from given step

export type ProofRule = Readonly<{
  name: string;

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

// it may be that a subproof can only have a single assumption,
// in order for rules referring to subproofs to work
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
