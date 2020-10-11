import { typeIt } from "../../../../src/utility/core/typeIt";

export function testInferenceOnEmptyTuples() {
  const value = [] as unknown;
  const type = [] as const;
  if (typeIt(value, type)) {
    value.map((x) => x);
  }
}
