import { segmentMeasure } from '../functions/MetricMakers';
import { point1, point2, point3, point4, point5, point6 } from './SemanticPoints';

export const segment12 = segmentMeasure(point1, point2);
export const segment34 = segmentMeasure(point3, point4);
export const segment56 = segmentMeasure(point5, point6);
