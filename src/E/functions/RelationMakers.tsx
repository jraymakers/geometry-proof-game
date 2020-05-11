import {
  AnglesAreEqualRelation,
  AreasAreEqualRelation,
  CirclesAreEqualRelation,
  LinesAreEqualRelation,
  PointsAreEqualRelation,
  SegmentsAreEqualRelation,
} from '../types/EqualityRelation';
import { CircleVariable, LineVariable, PointVariable } from '../types/GeometricVariable';
import {
  AngleLessThanAngleRelation,
  AreaLessThanAreaRelation,
  SegmentLessThanSegmentRelation,
} from '../types/LessThanRelation';
import { AngleMetric, AreaMetric, SegmentMetric } from '../types/Metric';
import {
  CirclesIntersectRelation,
  LineAndCircleIntersectRelation,
  LinesIntersectRelation,
  PointIsBetweenPointsRelation,
  PointIsCenterOfCircleRelation,
  PointIsInsideCircleRelation,
  PointIsOnCircleRelation,
  PointIsOnLineRelation,
  PointsAreOnSameSideOfLineRelation,
} from '../types/Relation';
import { RelationType } from '../types/RelationType';

// Equality

export function pointsAreEqual(
  point1: PointVariable,
  point2: PointVariable,
): PointsAreEqualRelation {
  return {
    relationType: RelationType.PointsAreEqual,
    point1,
    point2,
  }
}

export function linesAreEqual(
  line1: LineVariable,
  line2: LineVariable,
): LinesAreEqualRelation {
  return {
    relationType: RelationType.LinesAreEqual,
    line1,
    line2,
  }
}

export function circlesAreEqual(
  circle1: CircleVariable,
  circle2: CircleVariable,
): CirclesAreEqualRelation {
  return {
    relationType: RelationType.CirclesAreEqual,
    circle1,
    circle2,
  }
}

export function segmentsAreEqual(
  segment1: SegmentMetric,
  segment2: SegmentMetric,
): SegmentsAreEqualRelation {
  return {
    relationType: RelationType.SegmentsAreEqual,
    segment1,
    segment2,
  }
}

export function anglesAreEqual(
  angle1: AngleMetric,
  angle2: AngleMetric,
): AnglesAreEqualRelation {
  return {
    relationType: RelationType.AnglesAreEqual,
    angle1,
    angle2,
  }
}

export function areasAreEqual(
  area1: AreaMetric,
  area2: AreaMetric,
): AreasAreEqualRelation {
  return {
    relationType: RelationType.AreasAreEqual,
    area1,
    area2,
  }
}

// LessThan

export function segmentLessThanSegment(
  segment1: SegmentMetric,
  segment2: SegmentMetric,
): SegmentLessThanSegmentRelation {
  return {
    relationType: RelationType.SegmentLessThanSegment,
    segment1,
    segment2,
  }
}

export function angleLessThanAngle(
  angle1: AngleMetric,
  angle2: AngleMetric,
): AngleLessThanAngleRelation {
  return {
    relationType: RelationType.AngleLessThanAngle,
    angle1,
    angle2,
  }
}

export function areaLessThanArea(
  area1: AreaMetric,
  area2: AreaMetric,
): AreaLessThanAreaRelation {
  return {
    relationType: RelationType.AreaLessThanArea,
    area1,
    area2,
  }
}

// Other

export function pointIsOnLine(
  point: PointVariable,
  line: LineVariable,
): PointIsOnLineRelation {
  return {
    relationType: RelationType.PointIsOnLine,
    point,
    line,
  }
}

export function pointsAreOnSameSideOfLine(
  point1: PointVariable,
  point2: PointVariable,
  line: LineVariable,
): PointsAreOnSameSideOfLineRelation {
  return {
    relationType: RelationType.PointsAreOnSameSideOfLine,
    point1,
    point2,
    line,
  }
}

export function pointIsBetweenPoints(
  point1: PointVariable,
  point2: PointVariable,
  point3: PointVariable,
): PointIsBetweenPointsRelation {
  return {
    relationType: RelationType.PointIsBetweenPoints,
    point1,
    point2,
    point3,
  }
}

export function pointIsOnCircle(
  point: PointVariable,
  circle: CircleVariable,
): PointIsOnCircleRelation {
  return {
    relationType: RelationType.PointIsOnCircle,
    point,
    circle,
  }
}

export function pointIsInsideCircle(
  point: PointVariable,
  circle: CircleVariable,
): PointIsInsideCircleRelation {
  return {
    relationType: RelationType.PointIsInsideCircle,
    point,
    circle,
  }
}

export function pointIsCenterOfCircle(
  point: PointVariable,
  circle: CircleVariable,
): PointIsCenterOfCircleRelation {
  return {
    relationType: RelationType.PointIsCenterOfCircle,
    point,
    circle,
  }
}

export function linesIntersect(
  line1: LineVariable,
  line2: LineVariable,
): LinesIntersectRelation {
  return {
    relationType: RelationType.LinesIntersect,
    line1,
    line2,
  }
}

export function circlesIntersect(
  circle1: CircleVariable,
  circle2: CircleVariable,
): CirclesIntersectRelation {
  return {
    relationType: RelationType.CirclesIntersect,
    circle1,
    circle2,
  }
}

export function lineAndCircleIntersect(
  line: LineVariable,
  circle: CircleVariable,
): LineAndCircleIntersectRelation {
  return {
    relationType: RelationType.LineAndCircleIntersect,
    line,
    circle,
  }
}
