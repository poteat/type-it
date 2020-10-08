import { isTupleInterface } from "../../types/core/isTupleInterface";
import { PredicateKind } from "../../types/predicate/PredicateKind";
import { arraysAreOfEqualLength } from "../arrays/arraysAreOfEqualLength";
import { isType } from "./type/isType";

/**
 * Verify that the value and type arrays are the same length, and that the
 * types match for every element with the same index.
 */
export const isTuple = (<T extends PredicateKind[]>(
  values: unknown[],
  types: T
) => {
  return (
    arraysAreOfEqualLength(values, types) &&
    values.every((value, index) => {
      const type = types[index];
      return isType(value, type);
    })
  );
}) as isTupleInterface;
