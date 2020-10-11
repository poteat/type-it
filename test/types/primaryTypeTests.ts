import { testInferenceOnTuplesOfClasses } from "./tests/class/testInferenceOnTuplesOfClasses";
import { testInferenceOnEmptyTuples } from "./tests/empty/testInferenceOnEmptyTuples";
import { testInferenceOnErrorTypes } from "./tests/error/testInferenceOnErrorTypes";
import { testInferenceOnAsyncGeneratorTypes } from "./tests/generator/async/testInferenceOnAsyncGeneratorTypes";
import { testInferenceOnGeneratorTypes } from "./tests/generator/testInferenceOnGeneratorTypes";
import { testInferenceOnDeeplyNestedTypes } from "./tests/mixed/nested/testInferenceOnDeeplyNestedTypes";
import { testInferenceOnMixedTupleTypes } from "./tests/mixed/testInferenceOnMixedTupleTypes";
import { testInferenceOnNativeNumberTypes } from "./tests/native/number/testInferenceOnNativeNumberTypes";
import { testInferenceOnNativeStringTypes } from "./tests/native/string/testInferenceOnNativeStringTypes";
import { testInferenceOnPromiseTypes } from "./tests/promise/testInferenceOnPromiseTypes";

/**
 * These functions are built in order to test type inference. For certain
 * failure modes, i.e. due to regressions in the type inference logic, these
 * functions will emit compiler errors when trying to build the project.
 *
 * Although these functions may be run (and should not throw), they don't have
 * any behavior tests, and don't particularly serve a purpose other than to act
 * as a canary in the event of typing failures.
 */
export function primaryTypeTests() {
  testInferenceOnTuplesOfClasses();
  testInferenceOnEmptyTuples();

  testInferenceOnNativeNumberTypes();
  testInferenceOnNativeStringTypes();

  testInferenceOnMixedTupleTypes();

  testInferenceOnPromiseTypes();
  testInferenceOnErrorTypes();

  testInferenceOnGeneratorTypes();
  testInferenceOnAsyncGeneratorTypes();

  testInferenceOnDeeplyNestedTypes();
}
