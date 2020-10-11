import { typeIt } from "../../src/utility/core/typeIt";

function inferenceOnTuplesOfClasses() {
  const A = class {
    a() {}
  };
  const B = class {
    b() {}
  };

  const value = [new A(), new B()] as unknown;
  if (typeIt(value, [A, B] as const)) {
    value[0].a();
    value[1].b();
  }
}
