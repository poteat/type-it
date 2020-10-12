import { typeIt } from "../../../../src/utility/core/typeIt";

export function testInferenceOnTuplesOfClasses() {
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
