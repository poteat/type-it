import { typeIt } from "../../../../src/utility/core/typeIt";

export function testInferenceOnMixedTupleTypes() {
  const A = class {
    a() {}
  };
  const value = [new A(), 42] as unknown;
  const type = [A, Number] as const;
  if (typeIt(value, type)) {
    value[0].a();
    value[1].toExponential();
  }
}
