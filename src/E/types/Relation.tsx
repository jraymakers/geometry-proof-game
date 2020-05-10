import { EqualityRelation } from './EqualityRelation';
import { CircleVariable, LineVariable, PointVariable } from './GeometricVariable';
import { LessThanRelation } from './LessThanRelation';
import { BaseRelationType, RelationType } from './RelationType';


export type PointOnLineRelation = BaseRelationType<RelationType.PointOnLine> & Readonly<{
  point: PointVariable;
  line: LineVariable;
}>;

export type PointsSameSideOfLineRelation = BaseRelationType<RelationType.PointsSameSideOfLine> & Readonly<{
  point1: PointVariable;
  point2: PointVariable;
  line: LineVariable;
}>;

export type PointBetweenPointsRelation = BaseRelationType<RelationType.PointBetweenPoints> & Readonly<{
  point1: PointVariable;
  point2: PointVariable;
  point3: PointVariable;
}>;

export type PointOnCircleRelation = BaseRelationType<RelationType.PointOnCircle> & Readonly<{
  point: PointVariable;
  circle: CircleVariable;
}>;

export type PointInsideCircleRelation = BaseRelationType<RelationType.PointInsideCircle> & Readonly<{
  point: PointVariable;
  circle: CircleVariable;
}>;

export type PointCenterOfCircleRelation = BaseRelationType<RelationType.PointCenterOfCircle> & Readonly<{
  point: PointVariable;
  circle: CircleVariable;
}>;


export type IntersectingLinesRelation = BaseRelationType<RelationType.IntersectingLines> & Readonly<{
  line1: LineVariable;
  line2: LineVariable;
}>;

export type IntersectingCirclesRelation = BaseRelationType<RelationType.IntersectingCircles> & Readonly<{
  circle1: CircleVariable;
  circle2: CircleVariable;
}>;

export type IntersectingLineAndCircleRelation = BaseRelationType<RelationType.IntersectingLineAndCircle> & Readonly<{
  line: LineVariable;
  circle: CircleVariable;
}>;


export type Relation
  = EqualityRelation
  | LessThanRelation
  | PointOnLineRelation
  | PointsSameSideOfLineRelation
  | PointBetweenPointsRelation
  | PointOnCircleRelation
  | PointInsideCircleRelation
  | PointCenterOfCircleRelation
  | IntersectingLinesRelation
  | IntersectingCirclesRelation
  | IntersectingLineAndCircleRelation
  ;
