import { EqualityRelation } from './EqualityRelation';
import { CircleVariable, LineVariable, PointVariable } from './GeometricVariable';
import { LessThanRelation } from './LessThanRelation';
import { BaseRelationType, RelationType } from './RelationType';


export type PointIsOnLineRelation
= BaseRelationType<RelationType.PointIsOnLine>
& Readonly<{
  point: PointVariable;
  line: LineVariable;
}>;

export type PointsAreOnSameSideOfLineRelation
= BaseRelationType<RelationType.PointsAreOnSameSideOfLine>
& Readonly<{
  point1: PointVariable;
  point2: PointVariable;
  line: LineVariable;
}>;

export type PointIsBetweenPointsRelation
= BaseRelationType<RelationType.PointIsBetweenPoints>
& Readonly<{
  point1: PointVariable;
  point2: PointVariable;
  point3: PointVariable;
}>;

export type PointIsOnCircleRelation
= BaseRelationType<RelationType.PointIsOnCircle>
& Readonly<{
  point: PointVariable;
  circle: CircleVariable;
}>;

export type PointIsInsideCircleRelation
= BaseRelationType<RelationType.PointIsInsideCircle>
& Readonly<{
  point: PointVariable;
  circle: CircleVariable;
}>;

export type PointIsCenterOfCircleRelation
= BaseRelationType<RelationType.PointIsCenterOfCircle>
& Readonly<{
  point: PointVariable;
  circle: CircleVariable;
}>;


export type LinesIntersectRelation
= BaseRelationType<RelationType.LinesIntersect>
& Readonly<{
  line1: LineVariable;
  line2: LineVariable;
}>;

export type CirclesIntersectRelation
= BaseRelationType<RelationType.CirclesIntersect>
& Readonly<{
  circle1: CircleVariable;
  circle2: CircleVariable;
}>;

export type LineAndCircleIntersectRelation
= BaseRelationType<RelationType.LineAndCircleIntersect>
& Readonly<{
  line: LineVariable;
  circle: CircleVariable;
}>;


export type Relation
  = EqualityRelation
  | LessThanRelation
  | PointIsOnLineRelation
  | PointsAreOnSameSideOfLineRelation
  | PointIsBetweenPointsRelation
  | PointIsOnCircleRelation
  | PointIsInsideCircleRelation
  | PointIsCenterOfCircleRelation
  | LinesIntersectRelation
  | CirclesIntersectRelation
  | LineAndCircleIntersectRelation
  ;
