import * as React from 'react';

import { Relation } from '../../E/types/Relation';
import { RelationType } from '../../E/types/RelationType';
import { SegmentMetric, MetricTermType } from '../../E/types/Metric';

export const RelationView: React.FC<{
  relation: Relation;
}> = ({
  relation,
}) => {
  switch (relation.relationType) {
    case RelationType.PointsAreEqual:
      return <EqualRelationView op1={<span>{relation.point1.name}</span>} op2={<span>{relation.point2.name}</span>} />;
    case RelationType.LinesAreEqual:
      return <EqualRelationView op1={<span>{relation.line1.name}</span>} op2={<span>{relation.line2.name}</span>} />;
    case RelationType.CirclesAreEqual:
      return <EqualRelationView op1={<span>{relation.circle1.name}</span>} op2={<span>{relation.circle2.name}</span>} />;
    case RelationType.SegmentsAreEqual:
      return <EqualRelationView op1={<SegmentView segment={relation.segment1} />} op2={<SegmentView segment={relation.segment2} />} />;
    case RelationType.AnglesAreEqual:
      return <EqualRelationView op1={<span>{relation.angle1.sort}</span>} op2={<span>{relation.angle2.sort}</span>} />;
    case RelationType.AreasAreEqual:
      return <EqualRelationView op1={<span>{relation.area1.sort}</span>} op2={<span>{relation.area2.sort}</span>} />;
      
    case RelationType.SegmentLessThanSegment:
      return <LessThanRelationView name1={relation.segment1.sort} name2={relation.segment2.sort} />;
    case RelationType.AngleLessThanAngle:
      return <LessThanRelationView name1={relation.angle1.sort} name2={relation.angle2.sort} />;
    case RelationType.AreaLessThanArea:
      return <LessThanRelationView name1={relation.area1.sort} name2={relation.area2.sort} />;

    case RelationType.PointIsOnLine:
      return <BinaryRelationView relationName={'on-line'}
        name1={relation.point.name} name2={relation.line.name} />;
    case RelationType.PointsAreOnSameSideOfLine:
      return <TernaryRelationView relationName={'same-side'}
        name1={relation.point1.name} name2={relation.point2.name} name3={relation.line.name} />;
    case RelationType.PointIsBetweenPoints:
      return <TernaryRelationView relationName={'between'}
        name1={relation.point1.name} name2={relation.point2.name} name3={relation.point3.name} />;
    case RelationType.PointIsOnCircle:
      return <BinaryRelationView relationName={'on-circle'}
        name1={relation.point.name} name2={relation.circle.name} />;
    case RelationType.PointIsInsideCircle:
      return <BinaryRelationView relationName={'inside'}
        name1={relation.point.name} name2={relation.circle.name} />;
    case RelationType.PointIsCenterOfCircle:
      return <BinaryRelationView relationName={'center'}
        name1={relation.point.name} name2={relation.circle.name} />;

    case RelationType.LinesIntersect:
      return <BinaryRelationView relationName={'lines-intersect'}
        name1={relation.line1.name} name2={relation.line2.name} />;
    case RelationType.CirclesIntersect:
      return <BinaryRelationView relationName={'circles-intersect'}
        name1={relation.circle1.name} name2={relation.circle2.name} />;
    case RelationType.LineAndCircleIntersect:
      return <BinaryRelationView relationName={'line-circle-intersect'}
        name1={relation.line.name} name2={relation.circle.name} />;
  }
}
RelationView.displayName = 'RelationView';

export const EqualRelationView: React.FC<{
  op1: React.ReactElement;
  op2: React.ReactElement;
}> = ({
  op1,
  op2,
}) => {
  return (
    <span>
      <span>{op1}</span>
      <span>{'='}</span>
      <span>{op2}</span>
    </span>
  );
}
EqualRelationView.displayName = 'EqualRelationView';

export const LessThanRelationView: React.FC<{
  name1: string;
  name2: string;
}> = ({
  name1,
  name2,
}) => {
  return (
    <span>
      <span>{name1}</span>
      <span>{'<'}</span>
      <span>{name2}</span>
    </span>
  );
}
LessThanRelationView.displayName = 'LessThanRelationView';

export const BinaryRelationView: React.FC<{
  relationName: string;
  name1: string;
  name2: string;
}> = ({
  relationName,
  name1,
  name2,
}) => {
  return (
    <span>
      <span>{relationName}</span>
      <span>(</span>
      <span>{name1}</span>
      <span>,</span>
      <span>{name2}</span>
      <span>)</span>
    </span>
  );
}
BinaryRelationView.displayName = 'BinaryRelationView';

export const TernaryRelationView: React.FC<{
  relationName: string;
  name1: string;
  name2: string;
  name3: string;
}> = ({
  relationName,
  name1,
  name2,
  name3,
}) => {
  return (
    <span>
      <span>{relationName}</span>
      <span>(</span>
      <span>{name1}</span>
      <span>,</span>
      <span>{name2}</span>
      <span>,</span>
      <span>{name3}</span>
      <span>)</span>
    </span>
  );
}
TernaryRelationView.displayName = 'TernaryRelationView';

export const SegmentView: React.FC<{
  segment: SegmentMetric;
}> = ({
  segment,
}) => {
  switch (segment.termType) {
    case MetricTermType.Addition:
      return (
        <span>
          <SegmentView segment={segment.segment1} />
          <span>{'+'}</span>
          <SegmentView segment={segment.segment2} />
        </span>
      );
    case MetricTermType.Constant:
      return <span>segment.name</span>;
    case MetricTermType.Measure:
      return (
        <span>
          <span>{'segment'}</span>
          <span>(</span>
          <span>{segment.point1.name}</span>
          <span>,</span>
          <span>{segment.point2.name}</span>
          <span>)</span>
        </span>
      );
  }
}
SegmentView.displayName = 'SegmentView';
