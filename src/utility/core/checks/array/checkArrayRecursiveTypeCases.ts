import { arraysAreOfEqualLength } from "../../../arrays/arraysAreOfEqualLength";
import { More } from "../../../types/arrays/More";
import { typeIt } from "../../typeIt";

/**
 * Recursively process an array by visiting back to the master process, if
 * needed. If the special class "More" is the last element, then accept length
 * differences, assuming the intended target is the previous element.
 *
 * @param value Value to type check.
 * @param type Type to validate against.
 */
export function checkArrayRecursiveTypeCases(value: any, type: any): boolean {
  if (!Array.isArray(value) || !Array.isArray(type)) {
    return false;
  }

  const lastType = type[type.length - 1];

  if (lastType === More && type.length >= 2 && value.length > type.length) {
    const nextToLastType = type[type.length - 2];

    return value.every((x, index) =>
      typeIt(x, index > type.length - 1 ? nextToLastType : type[index])
    );
  } else {
    return (
      arraysAreOfEqualLength(value, type) &&
      value.every((x, index) => typeIt(x, type[index]))
    );
  }
}
