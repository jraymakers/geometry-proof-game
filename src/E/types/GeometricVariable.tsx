import { GeometricSort } from './GeometricSort';

export type BaseGeometricVariable<TSort extends GeometricSort> = Readonly<{
  sort: TSort;
  name: string;
}>;

export type PointVariable = BaseGeometricVariable<GeometricSort.Point>;

export type LineVariable = BaseGeometricVariable<GeometricSort.Line>;

export type CircleVariable = BaseGeometricVariable<GeometricSort.Circle>;

export type GeometricVariable
  = PointVariable
  | LineVariable
  | CircleVariable
  ;
