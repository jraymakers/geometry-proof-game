import * as React from 'react';

import { GeometricVariable } from '../../E/types/GeometricVariable';

export const GeometricVariableView: React.FC<{
  variable: GeometricVariable;
  withSort?: boolean;
}> = ({
  variable,
  withSort,
}) => {
  const {
    sort,
    name,
  } = variable;
  return (
    <span>{name}{withSort ? `[${sort}]` : null}</span>
  );
}
GeometricVariableView.displayName = 'GeometricVariableView';
