import { Class } from "../../../../types/class/Class";

export function checkConstructorTypeCases(value: any, type: any) {
  return (
    typeof value === "object" &&
    typeof type === "function" &&
    value instanceof (type as Class)
  );
}
