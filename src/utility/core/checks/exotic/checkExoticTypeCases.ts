import { AsyncGeneratorFunction } from "../../../generators/AsyncGeneratorFunction";
import { GeneratorFunction } from "../../../generators/GeneratorFunction";

export function checkExoticTypeCases(value: any, type: any) {
  return (
    typeof value === "function" &&
    (type === GeneratorFunction || type === AsyncGeneratorFunction) &&
    value instanceof type
  );
}
