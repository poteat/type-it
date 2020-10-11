import { GeneratorFunction } from "../../../../../src";
import { typeIt } from "../../../../../src/utility/core/typeIt";

export function testInferenceOnAsyncGeneratorTypes() {
  const value = async function* () {};
  const type = GeneratorFunction;
  if (typeIt(value, type)) {
    const x = value().next();
    x.finally;
  }
}
