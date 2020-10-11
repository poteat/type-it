/**
 *
 * For the supported literal types, check whether or not the value literally
 * matches the value of the type parameter.
 *
 * @param value Value to check.
 * @param type Literal value to check against.
 */
export function checkLiteralTypeCases(value: any, type: any) {
  return ["number", "string", "boolean", "symbol"].some(
    (x) => typeof value === x && typeof type === x && value === type
  );
}
