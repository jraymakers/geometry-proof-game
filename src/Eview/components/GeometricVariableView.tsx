import * as React from 'react';

import { GeometricVariable } from '../../E/types/GeometricVariable';

export const GeometricVariableView: React.FC<{
  variable: GeometricVariable;
}> = ({
  variable,
}) => {
  const {
    sort,
    name,
  } = variable;
  return (
    <span title={sort}>{name}</span>
  );
}
GeometricVariableView.displayName = 'GeometricVariableView';
