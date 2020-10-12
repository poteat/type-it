import { typeIt } from "../../../../src/utility/core/typeIt";

export function testInferenceOnPromiseTypes() {
  const value = (async () => {})() as unknown;
  const type = Promise;
  if (typeIt(value, type)) {
    value.finally;
  }
}
