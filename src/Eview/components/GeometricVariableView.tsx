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
    <span><span>{sort}</span> <span>{name}</span></span>
  );
}
GeometricVariableView.displayName = 'GeometricVariableView';
