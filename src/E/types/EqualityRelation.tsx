import { CircleVariable, LineVariable, PointVariable } from './GeometricVariable';
import { AngleMetric, AreaMetric, SegmentMetric } from './Metric';
import { BaseRelationType, RelationType } from './RelationType';

export type EqualPointsRelation = BaseRelationType<RelationType.EqualPoints> & Readonly<{
  point1: PointVariable;
  point2: PointVariable;
}>;

export type EqualLinesRelation = BaseRelationType<RelationType.EqualLines> & Readonly<{
  line1: LineVariable;
  line2: LineVariable;
}>;

export type EqualCirclesRelation = BaseRelationType<RelationType.EqualCircles> & Readonly<{
  circle1: CircleVariable;
  circle2: CircleVariable;
}>;

export type EqualSegmentsRelation = BaseRelationType<RelationType.EqualSegments> & Readonly<{
  segment1: SegmentMetric;
  segment2: SegmentMetric;
}>;

export type EqualAnglesRelation = BaseRelationType<RelationType.EqualAngles> & Readonly<{
  angle1: AngleMetric;
  angle2: AngleMetric;
}>;

export type EqualAreasRelation = BaseRelationType<RelationType.EqualAreas> & Readonly<{
  area1: AreaMetric;
  area2: AreaMetric;
}>;

export type EqualityRelation
  = EqualPointsRelation
  | EqualLinesRelation
  | EqualCirclesRelation
  | EqualSegmentsRelation
  | EqualAnglesRelation
  | EqualAreasRelation
  ;
