import { GeometricVariable } from './GeometricVariable';

export type VariableRename = Readonly<{
  originalVariable: GeometricVariable;
  renamedVariable: GeometricVariable;
}>;

export type VariableRenameList = readonly VariableRename[];
