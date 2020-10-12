import { AsyncGeneratorFunction } from "../../../types/generators/AsyncGeneratorFunction";
import { GeneratorFunction } from "../../../types/generators/GeneratorFunction";

/**
 * Given a value and a type, return whether or not the type represents a
 * generator of any kind, and if the value is an instance of that type.
 *
 * @param value Value to check
 * @param type Type to check against, if the type is a generator type.
 */
export function checkExoticTypeCases(value: any, type: any) {
  return (
    typeof value === "function" &&
    (type === GeneratorFunction || type === AsyncGeneratorFunction) &&
    value instanceof type
  );
}
