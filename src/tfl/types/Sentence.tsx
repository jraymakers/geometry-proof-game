export type AtomicSentence = Readonly<{
  sentenceType: 'atomic';
  symbol: string;
}>;

export type NegationSentence = Readonly<{
  sentenceType: 'negation';
  sentence: Sentence;
}>;

export type ConjunctionSentence = Readonly<{
  sentenceType: 'conjuction';
  sentence1: Sentence;
  sentence2: Sentence;
}>;

export type DisjunctionSentence = Readonly<{
  sentenceType: 'disjuction';
  sentence1: Sentence;
  sentence2: Sentence;
}>;

export type ConditionalSentence = Readonly<{
  sentenceType: 'conditional';
  sentence1: Sentence;
  sentence2: Sentence;
}>;

export type BiconditionalSentence = Readonly<{
  sentenceType: 'biconditional';
  sentence1: Sentence;
  sentence2: Sentence;
}>;

export type Sentence
  = AtomicSentence
  | NegationSentence
  | ConjunctionSentence
  | DisjunctionSentence
  | ConditionalSentence
  | BiconditionalSentence
  ;
