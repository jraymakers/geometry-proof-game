import * as React from 'react';

import { GeometricVariable } from '../../E/types/GeometricVariable';
import { cssClass } from '../../style';

const rootClass = cssClass('GeometricVariableView', 'root', {
  fontStyle: 'italic',
});

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
    <span className={rootClass} title={sort}>{name}</span>
  );
}
GeometricVariableView.displayName = 'GeometricVariableView';
