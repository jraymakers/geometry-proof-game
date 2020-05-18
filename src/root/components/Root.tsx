import * as React from 'react';

import {
  constructCircleCircleIntersectionPointTheorem,
  constructCircleTheorem,
} from '../../E/theorems/ConstructionTheorems';
import {
  centerInsideTheorem,
  circlesMutuallyInsideIntersectTheorem,
} from '../../E/theorems/DiagrammaticInferenceTheorems';
import {
  pointEqualitySymmetryTheorem,
  pointNonEqualitySymmetryTheorem,
  segmentEqualitySymmetryTheorem,
  segmentNonEqualitySymmetryTheorem,
  segmentEqualityTransitivityTheorem,
} from '../../E/theorems/EqualityTheorems';
import { exampleTheorem } from '../../E/theorems/ExampleTheorem';
import { BookIProp1 } from '../../euclid/BookI/BookIProp1';
import { TheoremView } from '../../Eview/components/TheoremView';
import { cssClass } from '../../style';
import { segmentSymmetryTheorem } from '../../E/theorems/MetricInferenceTheorems';
import { circleRadiiEqualTheorem } from '../../E/theorems/TransferInferenceTheorems';

const rootClass = cssClass('Root', 'root', {
  padding: 12,
});

export const Root: React.FC = () => {
  return (
    <div className={rootClass}>
      <div>Geometry Proof Game</div>

      <TheoremView theorem={exampleTheorem} />
      
      <TheoremView theorem={constructCircleTheorem} />
      <TheoremView theorem={constructCircleCircleIntersectionPointTheorem} />

      <TheoremView theorem={centerInsideTheorem} />
      <TheoremView theorem={circlesMutuallyInsideIntersectTheorem} />

      <TheoremView theorem={pointEqualitySymmetryTheorem} />
      <TheoremView theorem={pointNonEqualitySymmetryTheorem} />
      <TheoremView theorem={segmentEqualitySymmetryTheorem} />
      <TheoremView theorem={segmentNonEqualitySymmetryTheorem} />
      <TheoremView theorem={segmentEqualityTransitivityTheorem} />

      <TheoremView theorem={segmentSymmetryTheorem} />
  
      <TheoremView theorem={circleRadiiEqualTheorem} />
      
      <TheoremView theorem={BookIProp1} />
      
    </div>
  );
}
Root.displayName = 'Root';
