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
      <div>Theorem: {name}</div>
      <div>{antecedents.map((assertion, index) =>
        <div key={index}><AssertionView assertion={assertion} /></div>
      )}</div>
      <div>{'=>'}</div>

      <div>
        {newVariables.length > 0 ? '∃ ' : null}
        {newVariables.map((variable, index) =>
          <span key={index}>{index > 0 ? ', ' : null}<GeometricVariableView variable={variable} /></span>
        )}
      </div>
      <div>{consequents.map((assertion, index) =>
        <div key={index}><AssertionView assertion={assertion} /></div>
      )}</div>
    </div>
  );
}
TheoremView.displayName = 'TheoremView';
