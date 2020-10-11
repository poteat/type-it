import { typeIt } from "../../../../src/utility/core/typeIt";

export function testInferenceOnErrorTypes() {
  const value = new Error();
  const type = Error;
  if (typeIt(value, type)) {
    value.message;
  }
}
