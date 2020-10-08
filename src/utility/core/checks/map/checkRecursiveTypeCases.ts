import { typeIt } from "../../typeIt";

export function checkRecursiveTypeCases(value: any, type: any): boolean {
  /**
   * For each attribute in `value`, confirm that a corresponding attribute
   * exists in `type`. Additionally, if the value in that attribute in `value`
   * is not an array, confirm that it type checks with the runtime type value
   * in `type`.
   *
   * If the value of the corresponding subkey is an array, call `isTuple`
   * instead.
   */
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
