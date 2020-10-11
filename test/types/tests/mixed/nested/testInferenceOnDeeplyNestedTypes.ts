import { typeIt } from "../../../../../src/utility/core/typeIt";

export function testInferenceOnDeeplyNestedTypes() {
  const value = [{ x: { y: [{ z: 42 }] } }, "foo"] as unknown;
  const type = [{ x: { y: [{ z: 42 }] } }, "foo"] as const;
  if (typeIt(value, type)) {
    value[0].x.y[0].z.toExponential();
    value[1].concat();
  }
}
