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
  return <RelationView relation={relation} positive={positive} />;
}
RelationAssertionView.displayName = 'RelationAssertionView';
