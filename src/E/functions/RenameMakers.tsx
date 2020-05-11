import { GeometricVariable } from '../types/GeometricVariable';
import { VariableRename } from '../types/VariableRename';

export function rename(
  originalVariable: GeometricVariable,
  renamedVariable: GeometricVariable,
): VariableRename {
  return {
    originalVariable,
    renamedVariable,
  };
}
