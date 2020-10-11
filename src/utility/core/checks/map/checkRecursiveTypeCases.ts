import { typeIt } from "../../typeIt";

/**
 * If both sides are objects / records, we can be confident that we need to
 * recurse and validate the lower level of value and type instances.
 *
 * Vitally, we require that the entire record matches the type if and only if
 * each of the record's attributes also match with each of the type's records.
 *
 * Notably, the type check fails if the record has contents that the type does
 * not account for. In other words, it is a strict match, the value is not
 * allowed to have extra attributes.
 *
 * @param value Value to check
 * @param type Record representing a nested type hierarchy / tree.
 */
export function checkRecursiveTypeCases(value: any, type: any): boolean {
  return (
    typeof value === "object" &&
    typeof type === "object" &&
    !Array.isArray(value) &&
    !Array.isArray(type) &&
    Object.entries(value).every(
      ([key, x]: [any, any]) => type[key] && typeIt(x, type[key])
    )
  );
}
