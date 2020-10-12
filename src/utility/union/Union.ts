import { UnionType } from "./type/UnionType";

/**
 * Represents a union type of two or more types.
 */
export function Union<T1, T2, T extends any[]>(arg0: T1, arg1: T2, ...args: T) {
  return new UnionType(arg0, arg1, ...args);
}
