export type SentenceSentencePattern = Readonly<{
  sentencePatternType: 'sentence';
  name: string;
}>;

export type NegationSentencePattern = Readonly<{
  sentencePatternType: 'negation';
  sentence: SentencePattern;
}>;

export type ConjunctionSentencePattern = Readonly<{
  sentencePatternType: 'conjuction';
  sentence1: SentencePattern;
  sentence2: SentencePattern;
}>;

export type DisjunctionSentencePattern = Readonly<{
  sentencePatternType: 'disjuction';
  sentence1: SentencePattern;
  sentence2: SentencePattern;
}>;

export type ConditionalSentencePattern = Readonly<{
  sentencePatternType: 'conditional';
  sentence1: SentencePattern;
  sentence2: SentencePattern;
}>;

export type BiconditionalSentencePattern = Readonly<{
  sentencePatternType: 'biconditional';
  sentence1: SentencePattern;
  sentence2: SentencePattern;
}>;

export type SentencePattern
  = SentenceSentencePattern
  | NegationSentencePattern
  | ConjunctionSentencePattern
  | DisjunctionSentencePattern
  | ConditionalSentencePattern
  | BiconditionalSentencePattern
  ;
