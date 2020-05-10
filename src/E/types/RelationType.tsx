export enum RelationType {
  EqualPoints = 'EqualPoints',
  EqualLines = 'EqualLines',
  EqualCircles = 'EqualCircles',
  EqualSegments = 'EqualSegments',
  EqualAngles = 'EqualAngles',
  EqualAreas = 'EqualAreas',

  LessThanSegment = 'LessThanSegment',
  LessThanAngle = 'LessThanAngle',
  LessThanArea = 'LessThanArea',

  PointOnLine = 'PointOnLine',
  PointsSameSideOfLine = 'PointsSameSideOfLine',
  PointBetweenPoints = 'PointBetweenPoints',
  PointOnCircle = 'PointOnCircle',
  PointInsideCircle = 'PointInsideCircle',
  PointCenterOfCircle = 'PointCenterOfCircle',

  IntersectingLines = 'IntersectingLines',
  IntersectingCircles = 'IntersectingCircles',
  IntersectingLineAndCircle = 'IntersectingLineAndCircle',
}

export type BaseRelationType<TRelation extends RelationType> = Readonly<{
  relationType: TRelation;
}>;
