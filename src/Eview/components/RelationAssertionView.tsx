import * as React from 'react';

import { RelationAssertion } from '../../E/types/Assertion';
import { RelationView } from './RelationView';

export const RelationAssertionView: React.FC<{
  assertion: RelationAssertion;
}> = ({
  assertion,
}) => {
  const {
    positive,
    relation,
  } = assertion;
  const relationElement = <RelationView relation={relation} />;
  if (positive) {
    return relationElement;
  } else {
    return <span><span>¬(</span>{relationElement}<span>)</span></span>;
  }
}
RelationAssertionView.displayName = 'RelationAssertionView';
