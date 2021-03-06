import { PointVariable } from './GeometricVariable';
import { MetricSort } from './MetricSort';

// TermType

export enum MetricTermType {
  Addition = 'Addition',
  Constant = 'Constant',
  Measure = 'Measure',
}

// Base

export type BaseMetric<TSort extends MetricSort, TTerm extends MetricTermType> = Readonly<{
  sort: TSort;
  termType: TTerm;
}>;

export type BaseAddition<TSort extends MetricSort> = BaseMetric<TSort, MetricTermType.Addition>;

export type BaseConstant<TSort extends MetricSort> = BaseMetric<TSort, MetricTermType.Constant> & Readonly<{
  name: string;
}>;

export type BaseMeasure<TSort extends MetricSort> = BaseMetric<TSort, MetricTermType.Measure>;

// Segment

export type SegmentMetricAddition = BaseAddition<MetricSort.Segment> & Readonly<{
  segment1: SegmentMetric;
  segment2: SegmentMetric;
}>;

export type SegmentMetricConstant = BaseConstant<MetricSort.Segment>;

export type SegmentMetricMeasure = BaseMeasure<MetricSort.Segment> & Readonly<{
  point1: PointVariable;
  point2: PointVariable;
}>;

export type SegmentMetric
  = SegmentMetricAddition
  | SegmentMetricConstant
  | SegmentMetricMeasure
  ;

// Angle

export type AngleMetricAddition = BaseAddition<MetricSort.Angle> & Readonly<{
  angle1: AngleMetric;
  angle2: AngleMetric;
}>;

export type AngleMetricConstant = BaseConstant<MetricSort.Angle>;

export type AngleMetricMeasure = BaseMeasure<MetricSort.Angle> & Readonly<{
  point1: PointVariable;
  point2: PointVariable;
  point3: PointVariable;
}>;

export type AngleMetric
  = AngleMetricAddition
  | AngleMetricConstant
  | AngleMetricMeasure
  ;

// Area

export type AreaMetricAddition = BaseAddition<MetricSort.Area> & Readonly<{
  area1: AreaMetric;
  area2: AreaMetric;
}>;

export type AreaMetricConstant = BaseConstant<MetricSort.Area>;

export type AreaMetricMeasure = BaseMeasure<MetricSort.Area> & Readonly<{
  point1: PointVariable;
  point2: PointVariable;
  point3: PointVariable;
}>;

export type AreaMetric
  = AreaMetricAddition
  | AreaMetricConstant
  | AreaMetricMeasure
  ;

// Metric

export type Metric
  = SegmentMetric
  | AngleMetric
  | AreaMetric
  ;
