import {
  EqualAnglesRelation,
  EqualAreasRelation,
  EqualCirclesRelation,
  EqualLinesRelation,
  EqualPointsRelation,
  EqualSegmentsRelation,
} from '../types/EqualityRelation';
import { CircleVariable, LineVariable, PointVariable } from '../types/GeometricVariable';
import {
  LessThanAnglesRelation,
  LessThanAreaRelation,
  LessThanSegmentRelation,
} from '../types/LessThanRelation';
import { AngleMetric, AreaMetric, SegmentMetric } from '../types/Metric';
import {
  IntersectingCirclesRelation,
  IntersectingLineAndCircleRelation,
  IntersectingLinesRelation,
  PointBetweenPointsRelation,
  PointCenterOfCircleRelation,
  PointInsideCircleRelation,
  PointOnCircleRelation,
  PointOnLineRelation,
  PointsSameSideOfLineRelation,
} from '../types/Relation';
import { RelationType } from '../types/RelationType';

// Equality

export function equalPoints(
  point1: PointVariable,
  point2: PointVariable,
): EqualPointsRelation {
  return {
    relationType: RelationType.EqualPoints,
    point1,
    point2,
  }
}

export function equalLines(
  line1: LineVariable,
  line2: LineVariable,
): EqualLinesRelation {
  return {
    relationType: RelationType.EqualLines,
    line1,
    line2,
  }
}

export function equalCircles(
  circle1: CircleVariable,
  circle2: CircleVariable,
): EqualCirclesRelation {
  return {
    relationType: RelationType.EqualCircles,
    circle1,
    circle2,
  }
}

export function equalSegments(
  segment1: SegmentMetric,
  segment2: SegmentMetric,
): EqualSegmentsRelation {
  return {
    relationType: RelationType.EqualSegments,
    segment1,
    segment2,
  }
}

export function equalAngles(
  angle1: AngleMetric,
  angle2: AngleMetric,
): EqualAnglesRelation {
  return {
    relationType: RelationType.EqualAngles,
    angle1,
    angle2,
  }
}

export function equalAreas(
  area1: AreaMetric,
  area2: AreaMetric,
): EqualAreasRelation {
  return {
    relationType: RelationType.EqualAreas,
    area1,
    area2,
  }
}

// LessThan

export function lessThanSegment(
  segment1: SegmentMetric,
  segment2: SegmentMetric,
): LessThanSegmentRelation {
  return {
    relationType: RelationType.LessThanSegment,
    segment1,
    segment2,
  }
}

export function lessThanAngle(
  angle1: AngleMetric,
  angle2: AngleMetric,
): LessThanAnglesRelation {
  return {
    relationType: RelationType.LessThanAngle,
    angle1,
    angle2,
  }
}

export function lessThanArea(
  area1: AreaMetric,
  area2: AreaMetric,
): LessThanAreaRelation {
  return {
    relationType: RelationType.LessThanArea,
    area1,
    area2,
  }
}

// Other

export function pointOnLine(
  point: PointVariable,
  line: LineVariable,
): PointOnLineRelation {
  return {
    relationType: RelationType.PointOnLine,
    point,
    line,
  }
}

export function pointsSameSideOfLine(
  point1: PointVariable,
  point2: PointVariable,
  line: LineVariable,
): PointsSameSideOfLineRelation {
  return {
    relationType: RelationType.PointsSameSideOfLine,
    point1,
    point2,
    line,
  }
}

export function pointBetweenPoints(
  point1: PointVariable,
  point2: PointVariable,
  point3: PointVariable,
): PointBetweenPointsRelation {
  return {
    relationType: RelationType.PointBetweenPoints,
    point1,
    point2,
    point3,
  }
}

export function pointOnCircle(
  point: PointVariable,
  circle: CircleVariable,
): PointOnCircleRelation {
  return {
    relationType: RelationType.PointOnCircle,
    point,
    circle,
  }
}

export function pointInsideCircle(
  point: PointVariable,
  circle: CircleVariable,
): PointInsideCircleRelation {
  return {
    relationType: RelationType.PointInsideCircle,
    point,
    circle,
  }
}

export function pointCenterOfCircle(
  point: PointVariable,
  circle: CircleVariable,
): PointCenterOfCircleRelation {
  return {
    relationType: RelationType.PointCenterOfCircle,
    point,
    circle,
  }
}

export function intersectingLines(
  line1: LineVariable,
  line2: LineVariable,
): IntersectingLinesRelation {
  return {
    relationType: RelationType.IntersectingLines,
    line1,
    line2,
  }
}

export function intersectingCircles(
  circle1: CircleVariable,
  circle2: CircleVariable,
): IntersectingCirclesRelation {
  return {
    relationType: RelationType.IntersectingCircles,
    circle1,
    circle2,
  }
}

export function intersectingLineAndCircle(
  line: LineVariable,
  circle: CircleVariable,
): IntersectingLineAndCircleRelation {
  return {
    relationType: RelationType.IntersectingLineAndCircle,
    line,
    circle,
  }
}
