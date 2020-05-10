import { GeometricSort } from '../types/GeometricSort';
import {
  CircleVariable,
  GeometricVariable,
  LineVariable,
  PointVariable,
} from '../types/GeometricVariable';

export function variable(sort: GeometricSort, name: string): GeometricVariable {
  return {
    sort,
    name,
  };
}

export function point(name: string): PointVariable {
  return {
    sort: GeometricSort.Point,
    name,
  };
}

export function line(name: string): LineVariable {
  return {
    sort: GeometricSort.Line,
    name,
  };
}

export function circle(name: string): CircleVariable {
  return {
    sort: GeometricSort.Circle,
    name,
  };
}
