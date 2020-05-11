export enum RelationType {
  PointsAreEqual = 'PointsAreEqual',
  LinesAreEqual = 'LinesAreEqual',
  CirclesAreEqual = 'CirclesAreEqual',
  SegmentsAreEqual = 'SegmentsAreEqual',
  AnglesAreEqual = 'AnglesAreEqual',
  AreasAreEqual = 'AreasAreEqual',

  SegmentLessThanSegment = 'SegmentLessThanSegment',
  AngleLessThanAngle = 'AngleLessThanAngle',
  AreaLessThanArea = 'AreaLessThanArea',

  PointIsOnLine = 'PointIsOnLine',
  PointsAreOnSameSideOfLine = 'PointsAreOnSameSideOfLine',
  PointIsBetweenPoints = 'PointIsBetweenPoints',
  PointIsOnCircle = 'PointIsOnCircle',
  PointIsInsideCircle = 'PointIsInsideCircle',
  PointIsCenterOfCircle = 'PointIsCenterOfCircle',

  LinesIntersect = 'LinesIntersect',
  CirclesIntersect = 'CirclesIntersect',
  LineAndCircleIntersect = 'LineAndCircleIntersect',
}

export type BaseRelationType<TRelation extends RelationType> = Readonly<{
  relationType: TRelation;
}>;
