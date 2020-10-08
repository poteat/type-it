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
