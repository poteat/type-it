import { isTupleInterface } from "../../types/core/isTupleInterface";
import { checkArrayRecursiveTypeCases } from "./checks/array/checkArrayRecursiveTypeCases";
import { checkConstructorTypeCases } from "./checks/class/checkConstructorTypeCases";
import { checkExoticTypeCases } from "./checks/exotic/checkExoticTypeCases";
import { checkGeneralTypeCases } from "./checks/general/checkGeneralTypeCases";
import { checkLiteralTypeCases } from "./checks/literal/checkLiteralTypeCases";
import { checkRecursiveTypeCases } from "./checks/map/checkRecursiveTypeCases";
import { checkSpecialTypeCases } from "./checks/special/checkSpecialTypeCases";

/**
 * Verify that the value `value` is (roughly) of "type" `type`.
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
    checkRecursiveTypeCases,
  ].some((f) => f(value, type));
}) as isTupleInterface;
