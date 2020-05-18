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
    forAll,
    antecedents,
    thereExists,
    consequents,
  } = theorem;
  return (
    <div>
      {name}
      {': '}
      {forAll.length > 0 ? '∀' : null}
      {forAll.map((variable, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<GeometricVariableView variable={variable} /></span>
      )}
      {forAll.length > 0 ? ': ' : null}
      {antecedents.map((assertion, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<AssertionView key={index} assertion={assertion} /></span>
      )}
      {antecedents.length > 0 ? ' → ' : null}
      {thereExists.length > 0 ? '∃' : null}
      {thereExists.map((variable, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<GeometricVariableView variable={variable} /></span>
      )}
      {thereExists.length > 0 ? ': ' : null}
      {consequents.map((assertion, index) =>
        <span key={index}>{index > 0 ? ', ' : null}<AssertionView assertion={assertion} /></span>
      )}
    </div>
  );
}
TheoremView.displayName = 'TheoremView';
