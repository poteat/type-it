import { typeIt } from "../../../../../src/utility/core/typeIt";

export function testInferenceOnNativeStringTypes() {
  const value = { x: "foobar" } as unknown;
  const type = { x: String } as const;
  if (typeIt(value, type)) {
    value.x.concat();
  }
}
