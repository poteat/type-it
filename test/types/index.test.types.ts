import { GeneratorFunction } from "../../src";
import { typeIt } from "../../src/utility/core/typeIt";

function testInferenceOnEmptyTuples() {
  const value = [] as unknown;
  const type = [] as const;
  if (typeIt(value, type)) {
    value.map((x) => x);
  }
}

function testInferenceOnTuplesOfClasses() {
  const A = class {
    a() {}
  };
  const B = class {
    b() {}
  };

  const value = [new A(), new B()] as unknown;
  const type = [A, B] as const;
  if (typeIt(value, type)) {
    value[0].a();
    value[1].b();
  }
}

function testInferenceOnNativeNumberTypes() {
  const value = { x: 42 } as unknown;
  const type = { x: Number } as const;
  if (typeIt(value, type)) {
    value.x.toExponential();
  }
}

function testInferenceOnNativeStringTypes() {
  const value = { x: "foobar" } as unknown;
  const type = { x: String } as const;
  if (typeIt(value, type)) {
    value.x.concat();
  }
}

function testInferenceOnMixedTupleTypes() {
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

function testInferenceOnPromiseTypes() {
  const value = (async () => {})() as unknown;
  const type = Promise;
  if (typeIt(value, type)) {
    value.finally;
  }
}

function testInferenceOnErrorTypes() {
  const value = new Error();
  const type = Error;
  if (typeIt(value, type)) {
    value.message;
  }
}

function testInferenceOnGeneratorTypes() {
  const value = function* () {};
  const type = GeneratorFunction;
  if (typeIt(value, type)) {
    value().throw;
  }
}

function testInferenceOnAsyncGeneratorTypes() {
  const value = async function* () {};
  const type = GeneratorFunction;
  if (typeIt(value, type)) {
    const x = value().next();
    x.finally;
  }
}

function testInferenceOnDeeplyNestedTypes() {
  const value = [{ x: { y: [{ z: 42 }] } }, "foo"] as unknown;
  const type = [{ x: { y: [{ z: 42 }] } }, "foo"] as const;
  if (typeIt(value, type)) {
    value[0].x.y[0].z.toExponential();
    value[1].concat();
  }
}

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
