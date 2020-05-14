import * as React from 'react';
import { TheoremView } from '../../Eview/components/TheoremView';
import { BookIProp1 } from '../../euclid/BookI/BookIProp1';
import { cssClass } from '../../style';

const rootClass = cssClass('Root', 'root', {
  padding: 12,
});

export const Root: React.FC = () => {
  return (
    <div className={rootClass}>
      <div>Geometry Proof Game</div>
      <TheoremView theorem={BookIProp1} />
    </div>
  );
}
Root.displayName = 'Root';
