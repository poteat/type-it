import { typeIt } from "../../../../../src/utility/core/typeIt";

export function testInferenceOnNativeNumberTypes() {
  const value = { x: 42 } as unknown;
  const type = { x: Number } as const;
  if (typeIt(value, type)) {
    value.x.toExponential();
  }
}
