import { segmentMeasure } from '../../E/functions/MetricMakers';
import { pointA, pointB, pointC } from './NamedPoints';

export const segmentAB = segmentMeasure(pointA, pointB);
export const segmentBC = segmentMeasure(pointB, pointC);
export const segmentCA = segmentMeasure(pointC, pointA);
