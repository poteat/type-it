import { TypeIt } from "../../types/TypeIt";
import { checkArrayRecursiveTypeCases } from "./checks/array/checkArrayRecursiveTypeCases";
import { checkConstructorTypeCases } from "./checks/class/checkConstructorTypeCases";
import { checkExoticTypeCases } from "./checks/exotic/checkExoticTypeCases";
import { checkGeneralTypeCases } from "./checks/general/checkGeneralTypeCases";
import { checkLiteralTypeCases } from "./checks/literal/checkLiteralTypeCases";
import { checkRecursiveTypeCases } from "./checks/map/checkRecursiveTypeCases";
import { checkSpecialTypeCases } from "./checks/special/checkSpecialTypeCases";
import { checkUnionTypeCases } from "./checks/union/checkUnionTypeCases";

/**
 * Verify that the value `value` is of "type" `type`.
 *
 * We perform this operation via a list of type checks, some of which
 * recursively call the main body `typeIt` itself. During checks, there are many
 * special cases and checks performed.
 *
 * All type information is stored in a separate pure type interface.
 *
 * @param value Value to match for
 * @param type "Type" to match against
 */
export const typeIt = ((value: any, type: any) => {
  return [
    checkArrayRecursiveTypeCases,
    checkSpecialTypeCases,
    checkExoticTypeCases,
    checkGeneralTypeCases,
    checkLiteralTypeCases,
    checkConstructorTypeCases,
    checkUnionTypeCases,
    checkRecursiveTypeCases,
  ].some((f) => f(value, type));
}) as TypeIt;
