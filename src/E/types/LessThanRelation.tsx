import { AngleMetric, AreaMetric, SegmentMetric } from './Metric';
import { BaseRelationType, RelationType } from './RelationType';

export type LessThanSegmentRelation = BaseRelationType<RelationType.LessThanSegment> & Readonly<{
  segment1: SegmentMetric;
  segment2: SegmentMetric;
}>;

export type LessThanAnglesRelation = BaseRelationType<RelationType.LessThanAngle> & Readonly<{
  angle1: AngleMetric;
  angle2: AngleMetric;
}>;

export type LessThanAreaRelation = BaseRelationType<RelationType.LessThanArea> & Readonly<{
  area1: AreaMetric;
  area2: AreaMetric;
}>;

export type LessThanRelation
  = LessThanSegmentRelation
  | LessThanAnglesRelation
  | LessThanAreaRelation
  ;
