import { CircleVariable, LineVariable, PointVariable } from './GeometricVariable';
import { AngleMetric, AreaMetric, SegmentMetric } from './Metric';
import { BaseRelationType, RelationType } from './RelationType';

export type PointsAreEqualRelation
= BaseRelationType<RelationType.PointsAreEqual>
& Readonly<{
  point1: PointVariable;
  point2: PointVariable;
}>;

export type LinesAreEqualRelation
= BaseRelationType<RelationType.LinesAreEqual>
& Readonly<{
  line1: LineVariable;
  line2: LineVariable;
}>;

export type CirclesAreEqualRelation
= BaseRelationType<RelationType.CirclesAreEqual>
& Readonly<{
  circle1: CircleVariable;
  circle2: CircleVariable;
}>;

export type SegmentsAreEqualRelation
= BaseRelationType<RelationType.SegmentsAreEqual>
& Readonly<{
  segment1: SegmentMetric;
  segment2: SegmentMetric;
}>;

export type AnglesAreEqualRelation
= BaseRelationType<RelationType.AnglesAreEqual>
& Readonly<{
  angle1: AngleMetric;
  angle2: AngleMetric;
}>;

export type AreasAreEqualRelation
= BaseRelationType<RelationType.AreasAreEqual>
& Readonly<{
  area1: AreaMetric;
  area2: AreaMetric;
}>;

export type EqualityRelation
  = PointsAreEqualRelation
  | LinesAreEqualRelation
  | CirclesAreEqualRelation
  | SegmentsAreEqualRelation
  | AnglesAreEqualRelation
  | AreasAreEqualRelation
  ;
