import { Class } from "../../../../types/class/Class";

/**
 * In the case that the native types of the value and type are object and
 * function respectively, return whether or not the value is an instance of that
 * type.
 *
 * For class constructors, their native type is a 'function', so this
 * effectively speaking also checks whether the type is a class constructor.
 *
 * This is how we implement custom-class runtime type checking. This is also
 * valid with inheritance, in that `instanceof` inspects the entire prototype
 * chain. Therefore, any subclass will be considered an instance of any of its
 * superclasses as well.
 *
 * @param value Value to check.
 * @param type Type, potentially a class constructor, to validate against.
 */
export function checkConstructorTypeCases(value: any, type: any) {
  return (
    typeof value === "object" &&
    typeof type === "function" &&
    value instanceof (type as Class)
  );
}
