import * as React from 'react';

import { Assertion, AssertionType } from '../../E/types/Assertion';
import { RelationAssertionView } from './RelationAssertionView';

export const AssertionView: React.FC<{
  assertion: Assertion;
}> = ({
  assertion,
}) => {
  switch (assertion.assertionType) {
    case AssertionType.Contradiction:
      return <span>Contradiction</span>;
    case AssertionType.Relation:
      return <RelationAssertionView assertion={assertion} />
  }
}
AssertionView.displayName = 'AssertionView';
