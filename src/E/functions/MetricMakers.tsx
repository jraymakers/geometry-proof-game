import { PointVariable } from '../types/GeometricVariable';
import {
  AngleMetric,
  AngleMetricAddition,
  AngleMetricConstant,
  AngleMetricMeasure,
  AreaMetric,
  AreaMetricAddition,
  AreaMetricConstant,
  AreaMetricMeasure,
  MetricTermType,
  SegmentMetric,
  SegmentMetricAddition,
  SegmentMetricConstant,
  SegmentMetricMeasure,
} from '../types/Metric';
import { MetricSort } from '../types/MetricSort';

// Segment

export function segmentAddition(
  segment1: SegmentMetric,
  segment2: SegmentMetric,
): SegmentMetricAddition {
  return {
    sort: MetricSort.Segment,
    termType: MetricTermType.Addition,
    segment1,
    segment2,
  };
}

export const segAdd = segmentAddition;

export function segmentConstant(
  name: string,
): SegmentMetricConstant {
  return {
    sort: MetricSort.Segment,
    termType: MetricTermType.Constant,
    name,
  };
}

export function segmentMeasure(
  point1: PointVariable,
  point2: PointVariable,
): SegmentMetricMeasure {
  return {
    sort: MetricSort.Segment,
    termType: MetricTermType.Measure,
    point1,
    point2,
  };
}

export const seg = segmentMeasure;

// Angle

export function angleAddition(
  angle1: AngleMetric,
  angle2: AngleMetric,
): AngleMetricAddition {
  return {
    sort: MetricSort.Angle,
    termType: MetricTermType.Addition,
    angle1,
    angle2,
  };
}

export const angleAdd = angleAddition;

export function angleConstant(
  name: string,
): AngleMetricConstant {
  return {
    sort: MetricSort.Angle,
    termType: MetricTermType.Constant,
    name,
  };
}

export function angleMeasure(
  point1: PointVariable,
  point2: PointVariable,
  point3: PointVariable,
): AngleMetricMeasure {
  return {
    sort: MetricSort.Angle,
    termType: MetricTermType.Measure,
    point1,
    point2,
    point3,
  };
}

export const angle = angleMeasure;

// Area

export function areaAddition(
  area1: AreaMetric,
  area2: AreaMetric,
): AreaMetricAddition {
  return {
    sort: MetricSort.Area,
    termType: MetricTermType.Addition,
    area1,
    area2,
  };
}

export const areaAdd = areaAddition

export function areaConstant(
  name: string,
): AreaMetricConstant {
  return {
    sort: MetricSort.Area,
    termType: MetricTermType.Constant,
    name,
  };
}

export function areaMeasure(
  point1: PointVariable,
  point2: PointVariable,
  point3: PointVariable,
): AreaMetricMeasure {
  return {
    sort: MetricSort.Area,
    termType: MetricTermType.Measure,
    point1,
    point2,
    point3,
  };
}

export const area = areaMeasure;
