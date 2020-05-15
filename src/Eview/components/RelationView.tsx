import * as React from 'react';

import { GeometricVariable } from '../../E/types/GeometricVariable';
import {
  AngleMetric,
  AreaMetric,
  Metric,
  MetricTermType,
  SegmentMetric,
} from '../../E/types/Metric';
import { Relation } from '../../E/types/Relation';
import { RelationType } from '../../E/types/RelationType';
import { MetricSort } from '../../E/types/MetricSort';
import { GeometricVariableView } from './GeometricVariableView';
import { cssClass } from '../../style';

const segmentClass = cssClass('SegmentView', 'root', {
  textDecoration: 'overline',
});

export const RelationView: React.FC<{
  relation: Relation;
}> = ({
  relation,
}) => {
  switch (relation.relationType) {
    case RelationType.PointsAreEqual:
      return (
        <BinaryInfixVariableRelationView
          symbol='='
          v1={relation.point1}
          v2={relation.point2}
        />
      );
    case RelationType.LinesAreEqual:
      return (
        <BinaryInfixVariableRelationView
          symbol='='
          v1={relation.line1}
          v2={relation.line2}
        />
      );
    case RelationType.CirclesAreEqual:
      return (
        <BinaryInfixVariableRelationView
          symbol='='
          v1={relation.circle1}
          v2={relation.circle2}
        />
      );
    case RelationType.SegmentsAreEqual:
      return (
        <BinaryInfixMetricRelationView
          symbol='='
          m1={relation.segment1}
          m2={relation.segment2}
        />
      );
    case RelationType.AnglesAreEqual:
      return (
        <BinaryInfixMetricRelationView
          symbol='='
          m1={relation.angle1}
          m2={relation.angle2}
        />
      );
    case RelationType.AreasAreEqual:
      return (
        <BinaryInfixMetricRelationView
          symbol='='
          m1={relation.area1}
          m2={relation.area2}
        />
      );
      
    case RelationType.SegmentLessThanSegment:
      return (
        <BinaryInfixMetricRelationView
          symbol='<'
          m1={relation.segment1}
          m2={relation.segment2}
        />
      );
    case RelationType.AngleLessThanAngle:
      return (
        <BinaryInfixMetricRelationView
          symbol='<'
          m1={relation.angle1}
          m2={relation.angle2}
        />
      );
    case RelationType.AreaLessThanArea:
      return (
        <BinaryInfixMetricRelationView
          symbol='<'
          m1={relation.area1}
          m2={relation.area2}
        />
      );

    case RelationType.PointIsOnLine:
      return (
        <BinaryPrefixVariableRelationView
          name={'on-line'}
          v1={relation.point}
          v2={relation.line}
        />
      );
    case RelationType.PointsAreOnSameSideOfLine:
      return (
        <TernaryPrefixVariableRelationView
          name={'same-side'}
          v1={relation.point1}
          v2={relation.point2}
          v3={relation.line}
        />
      );
    case RelationType.PointIsBetweenPoints:
      return (
        <TernaryPrefixVariableRelationView
          name={'between'}
          v1={relation.point1}
          v2={relation.point2}
          v3={relation.point3}
        />
      );
    case RelationType.PointIsOnCircle:
      return (
        <BinaryPrefixVariableRelationView
          name={'on-circle'}
          v1={relation.point}
          v2={relation.circle}
        />
      );
    case RelationType.PointIsInsideCircle:
      return (
        <BinaryPrefixVariableRelationView
          name={'inside'}
          v1={relation.point}
          v2={relation.circle}
        />
      );
    case RelationType.PointIsCenterOfCircle:
      return (
        <BinaryPrefixVariableRelationView
          name={'center'}
          v1={relation.point}
          v2={relation.circle}
        />
      );

    case RelationType.LinesIntersect:
      return (
        <BinaryPrefixVariableRelationView
          name={'lines-intersect'}
          v1={relation.line1}
          v2={relation.line2}
        />
      );
    case RelationType.CirclesIntersect:
      return (
        <BinaryPrefixVariableRelationView
          name={'circles-intersect'}
          v1={relation.circle1}
          v2={relation.circle2}
        />
      );
    case RelationType.LineAndCircleIntersect:
      return (
        <BinaryPrefixVariableRelationView
          name={'line-circle-intersect'}
          v1={relation.line}
          v2={relation.circle}
        />
      );
  }
}
RelationView.displayName = 'RelationView';

export const BinaryInfixVariableRelationView: React.FC<{
  symbol: string;
  v1: GeometricVariable;
  v2: GeometricVariable;
}> = ({
  symbol,
  v1,
  v2,
}) => {
  return (
    <span>
      <GeometricVariableView variable={v1} />
      <span>{symbol}</span>
      <GeometricVariableView variable={v2} />
    </span>
  );
}
BinaryInfixVariableRelationView.displayName = 'BinaryInfixVariableRelationView';

export const BinaryInfixMetricRelationView: React.FC<{
  symbol: string;
  m1: Metric;
  m2: Metric;
}> = ({
  symbol,
  m1,
  m2,
}) => {
  return (
    <span>
      <MetricView metric={m1} />
      <span>{symbol}</span>
      <MetricView metric={m2} />
    </span>
  );
}
BinaryInfixMetricRelationView.displayName = 'BinaryInfixMetricRelationView';

export const BinaryPrefixVariableRelationView: React.FC<{
  name: string;
  v1: GeometricVariable;
  v2: GeometricVariable;
}> = ({
  name,
  v1,
  v2,
}) => {
  return (
    <span>
      <span>{name}</span>
      <span>(</span>
      <GeometricVariableView variable={v1} />
      <span>,</span>
      <GeometricVariableView variable={v2} />
      <span>)</span>
    </span>
  );
}
BinaryPrefixVariableRelationView.displayName = 'BinaryPrefixVariableRelationView';

export const TernaryPrefixVariableRelationView: React.FC<{
  name: string;
  v1: GeometricVariable;
  v2: GeometricVariable;
  v3: GeometricVariable;
}> = ({
  name,
  v1,
  v2,
  v3,
}) => {
  return (
    <span>
      <span>{name}</span>
      <span>(</span>
      <GeometricVariableView variable={v1} />
      <span>,</span>
      <GeometricVariableView variable={v2} />
      <span>,</span>
      <GeometricVariableView variable={v3} />
      <span>)</span>
    </span>
  );
}
TernaryPrefixVariableRelationView.displayName = 'TernaryPrefixVariableRelationView';

export const MetricView: React.FC<{
  metric: Metric;
}> = ({
  metric,
}) => {
  switch (metric.sort) {
    case MetricSort.Angle:
      return <AngleView angle={metric} />;
    case MetricSort.Area:
      return <AreaView area={metric} />;
    case MetricSort.Segment:
      return <SegmentView segment={metric} />;
  }
}

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
      return <span>{segment.name}</span>;
    case MetricTermType.Measure:
      return (
        <span className={segmentClass}>
          {segment.point1.name}
          {segment.point2.name}
        </span>
      );
  }
}
SegmentView.displayName = 'SegmentView';

export const AngleView: React.FC<{
  angle: AngleMetric;
}> = ({
  angle,
}) => {
  switch (angle.termType) {
    case MetricTermType.Addition:
      return (
        <span>
          <AngleView angle={angle.angle1} />
          <span>{'+'}</span>
          <AngleView angle={angle.angle2} />
        </span>
      );
    case MetricTermType.Constant:
      return <span>{angle.name}</span>;
    case MetricTermType.Measure:
      return (
        <span>
          <span>{'angle'}</span>
          <span>(</span>
          <span>{angle.point1.name}</span>
          <span>,</span>
          <span>{angle.point2.name}</span>
          <span>,</span>
          <span>{angle.point3.name}</span>
          <span>)</span>
        </span>
      );
  }
}
AngleView.displayName = 'AngleView';

export const AreaView: React.FC<{
  area: AreaMetric;
}> = ({
  area,
}) => {
  switch (area.termType) {
    case MetricTermType.Addition:
      return (
        <span>
          <AreaView area={area.area1} />
          <span>{'+'}</span>
          <AreaView area={area.area2} />
        </span>
      );
    case MetricTermType.Constant:
      return <span>{area.name}</span>;
    case MetricTermType.Measure:
      return (
        <span>
          <span>{'area'}</span>
          <span>(</span>
          <span>{area.point1.name}</span>
          <span>,</span>
          <span>{area.point2.name}</span>
          <span>,</span>
          <span>{area.point3.name}</span>
          <span>)</span>
        </span>
      );
  }
}
AreaView.displayName = 'AreaView';