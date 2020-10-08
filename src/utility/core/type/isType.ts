import { checkConstructorTypeCases } from "../checks/class/checkConstructorTypeCases";
import { checkExoticTypeCases } from "../checks/exotic/checkExoticTypeCases";
import { checkGeneralTypeCases } from "../checks/general/checkGeneralTypeCases";
import { checkLiteralTypeCases } from "../checks/literal/checkLiteralTypeCases";
import { checkRecursiveTypeCases } from "../checks/map/checkRecursiveTypeCases";
import { checkSpecialTypeCases } from "../checks/special/checkSpecialTypeCases";

/**
 * Verify that the non-array `value` is (roughly) of "type" `type`.
 *
 * We leave this function untyped as that's handled elsewhere (and it would be
 * too meta otherwise). It's defined as separate cases to check, for various
 * native and higher-level types.
 *
 * @param value Value to match for
 * @param type "Type" to match against
 */
export function isType(value: any, type: any) {
  return [
    checkSpecialTypeCases,
    checkExoticTypeCases,
    checkGeneralTypeCases,
    checkLiteralTypeCases,
    checkConstructorTypeCases,
    checkRecursiveTypeCases,
  ].some((f) => f(value, type));
}
