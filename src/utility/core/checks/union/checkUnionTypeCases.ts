import { UnionType } from "../../../union/type/UnionType";
import { typeIt } from "../../typeIt";

export function checkUnionTypeCases(value: any, type: any) {
  /** If the type is a UnionType, then return true if any subtype of that type
   * matches the type of `value`.
   */
  return (
    type instanceof UnionType &&
    (type.subtypes as any[]).some((type) => typeIt(value, type))
  );
}
