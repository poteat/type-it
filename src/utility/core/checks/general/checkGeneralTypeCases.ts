/**
 * Check the general, or 'simple' type cases, whereby we're checking against a
 * very holistic set of values, i.e. "all numbers", or "all strings".
 *
 * These correspond to the native runtime types.
 *
 * @param value Value to check
 * @param type Type to validate against.
 */
export function checkGeneralTypeCases(value: any, type: any) {
  return (
    (typeof value === "number" && type === Number) ||
    (typeof value === "string" && type === String) ||
    (typeof value === "boolean" && type === Boolean) ||
    (typeof value === "symbol" && type === Symbol) ||
    (typeof value === "object" && type === Object) ||
    (typeof value === "function" && type === Function)
  );
}
