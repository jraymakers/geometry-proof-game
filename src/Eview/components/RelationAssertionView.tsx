import * as React from 'react';

import { RelationAssertion } from '../../E/types/Assertion';
import { GeometricVariable } from '../../E/types/GeometricVariable';
import {
  AngleMetric,
  AreaMetric,
  Metric,
  MetricTermType,
  SegmentMetric,
} from '../../E/types/Metric';
import { MetricSort } from '../../E/types/MetricSort';
import { RelationType } from '../../E/types/RelationType';
import { cssClass } from '../../style';
import { GeometricVariableView } from './GeometricVariableView';

const segmentClass = cssClass('SegmentView', 'root', {
  textDecoration: 'overline',
});

function equalOrNotEqual(positive: boolean): string {
  return positive ? '=' : '≠';
}

function lessThanOrNotLessThan(positive: boolean): string {
  return positive ? '<' : '≮';
}

function relationOrNotRelation(positive: boolean, name: string): string {
  return positive ? name : '¬' + name;
}

export const RelationAssertionView: React.FC<{
  assertion: RelationAssertion;
}> = ({
  assertion,
}) => {
  const {
    relation,
    positive,
  } = assertion;
  switch (relation.relationType) {
    case RelationType.PointsAreEqual:
      return (
        <BinaryInfixVariableRelationView
          symbol={equalOrNotEqual(positive)}
          v1={relation.point1}
          v2={relation.point2}
        />
      );
    case RelationType.LinesAreEqual:
      return (
        <BinaryInfixVariableRelationView
          symbol={equalOrNotEqual(positive)}
          v1={relation.line1}
          v2={relation.line2}
        />
      );
    case RelationType.CirclesAreEqual:
      return (
        <BinaryInfixVariableRelationView
          symbol={equalOrNotEqual(positive)}
          v1={relation.circle1}
          v2={relation.circle2}
        />
      );
    case RelationType.SegmentsAreEqual:
      return (
        <BinaryInfixMetricRelationView
          symbol={equalOrNotEqual(positive)}
          m1={relation.segment1}
          m2={relation.segment2}
        />
      );
    case RelationType.AnglesAreEqual:
      return (
        <BinaryInfixMetricRelationView
          symbol={equalOrNotEqual(positive)}
          m1={relation.angle1}
          m2={relation.angle2}
        />
      );
    case RelationType.AreasAreEqual:
      return (
        <BinaryInfixMetricRelationView
          symbol={equalOrNotEqual(positive)}
          m1={relation.area1}
          m2={relation.area2}
        />
      );
      
    case RelationType.SegmentLessThanSegment:
      return (
        <BinaryInfixMetricRelationView
          symbol={lessThanOrNotLessThan(positive)}
          m1={relation.segment1}
          m2={relation.segment2}
        />
      );
    case RelationType.AngleLessThanAngle:
      return (
        <BinaryInfixMetricRelationView
          symbol={lessThanOrNotLessThan(positive)}
          m1={relation.angle1}
          m2={relation.angle2}
        />
      );
    case RelationType.AreaLessThanArea:
      return (
        <BinaryInfixMetricRelationView
          symbol={lessThanOrNotLessThan(positive)}
          m1={relation.area1}
          m2={relation.area2}
        />
      );

    case RelationType.PointIsOnLine:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'on')}
          v1={relation.point}
          v2={relation.line}
        />
      );
    case RelationType.PointsAreOnSameSideOfLine:
      return (
        <TernaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'same-side')}
          v1={relation.point1}
          v2={relation.point2}
          v3={relation.line}
        />
      );
    case RelationType.PointIsBetweenPoints:
      return (
        <TernaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'between')}
          v1={relation.point1}
          v2={relation.point2}
          v3={relation.point3}
        />
      );
    case RelationType.PointIsOnCircle:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'on')}
          v1={relation.point}
          v2={relation.circle}
        />
      );
    case RelationType.PointIsInsideCircle:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'inside')}
          v1={relation.point}
          v2={relation.circle}
        />
      );
    case RelationType.PointIsCenterOfCircle:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'center')}
          v1={relation.point}
          v2={relation.circle}
        />
      );

    case RelationType.LinesIntersect:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'intersect')}
          v1={relation.line1}
          v2={relation.line2}
        />
      );
    case RelationType.CirclesIntersect:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'intersect')}
          v1={relation.circle1}
          v2={relation.circle2}
        />
      );
    case RelationType.LineAndCircleIntersect:
      return (
        <BinaryPrefixVariableRelationView
          name={relationOrNotRelation(positive, 'intersect')}
          v1={relation.line}
          v2={relation.circle}
        />
      );
  }
}
RelationAssertionView.displayName = 'RelationAssertionView';

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
      <span>, </span>
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
      <span>, </span>
      <GeometricVariableView variable={v2} />
      <span>, </span>
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
          <GeometricVariableView variable={segment.point1} />
          <GeometricVariableView variable={segment.point2} />
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
          <span>{'∠'}</span>
          <GeometricVariableView variable={angle.point1} />
          <GeometricVariableView variable={angle.point2} />
          <GeometricVariableView variable={angle.point3} />
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
          <span>{'△'}</span>
          <GeometricVariableView variable={area.point1} />
          <GeometricVariableView variable={area.point2} />
          <GeometricVariableView variable={area.point3} />
        </span>
      );
  }
}
AreaView.displayName = 'AreaView';
