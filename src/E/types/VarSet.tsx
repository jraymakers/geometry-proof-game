import { GeometricSort } from './GeometricSort';

export type VarSet<T> = Readonly<{
  [name: string]: T;
}>;

export type GeoVarSet = VarSet<GeometricSort>;
