import * as React from 'react';

import { Theorem } from '../../E/types/Theorem';
import { GeometricVariableView } from './GeometricVariableView';
import { AssertionView } from './AssertionView';

export const TheoremView: React.FC<{
  theorem: Theorem;
}> = ({
  theorem,
}) => {
  const {
    name,
    antecedents,
    newVariables,
    consequents,
  } = theorem;
  return (
    <div>
      {name}
      {': '}
      {antecedents.map((assertion, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<AssertionView key={index} assertion={assertion} /></span>
      )}
      {' → '}
      {newVariables.length > 0 ? '∃' : null}
      {newVariables.map((variable, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<GeometricVariableView variable={variable} /></span>
      )}
      {' '}
      {consequents.map((assertion, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<AssertionView assertion={assertion} /></span>
      )}
    </div>
  );
}
TheoremView.displayName = 'TheoremView';
