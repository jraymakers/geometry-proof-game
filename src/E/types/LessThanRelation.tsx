import { AngleMetric, AreaMetric, SegmentMetric } from './Metric';
import { BaseRelationType, RelationType } from './RelationType';

export type SegmentLessThanSegmentRelation
= BaseRelationType<RelationType.SegmentLessThanSegment>
& Readonly<{
  segment1: SegmentMetric;
  segment2: SegmentMetric;
}>;

export type AngleLessThanAngleRelation
= BaseRelationType<RelationType.AngleLessThanAngle>
& Readonly<{
  angle1: AngleMetric;
  angle2: AngleMetric;
}>;

export type AreaLessThanAreaRelation
= BaseRelationType<RelationType.AreaLessThanArea>
& Readonly<{
  area1: AreaMetric;
  area2: AreaMetric;
}>;

export type LessThanRelation
  = SegmentLessThanSegmentRelation
  | AngleLessThanAngleRelation
  | AreaLessThanAreaRelation
  ;
