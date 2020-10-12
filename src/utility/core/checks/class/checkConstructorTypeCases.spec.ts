import { checkConstructorTypeCases } from "./checkConstructorTypeCases";

describe("Custom class type checking", () => {
  it("a === A", () => {
    const A = class {};

    const value = new A() as unknown;
    const type = A;

    const isValid = checkConstructorTypeCases(value, type);
    expect(isValid).toStrictEqual(true);
  });

  it("a !== B", () => {
    const A = class {};
    const B = class {};

    const value = new A() as unknown;
    const type = B;

    const isValid = checkConstructorTypeCases(value, type);
    expect(isValid).toStrictEqual(false);
  });
});
