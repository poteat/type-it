export function checkLiteralTypeCases(value: any, type: any) {
  return ["number", "string", "boolean", "symbol"].some(
    (x) => typeof value === x && typeof type === x && value === type
  );
}
