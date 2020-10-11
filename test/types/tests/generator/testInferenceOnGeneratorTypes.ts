import { GeneratorFunction } from "../../../../src";
import { typeIt } from "../../../../src/utility/core/typeIt";

export function testInferenceOnGeneratorTypes() {
  const value = function* () {};
  const type = GeneratorFunction;
  if (typeIt(value, type)) {
    value().throw;
  }
}
