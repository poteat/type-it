import { typeIt } from "../../src";

class UnionType<T extends any[]> {
  subtypes: T;

  constructor(...args: T) {
    this.subtypes = args;
  }
}

function Union<T extends any[]>(...args: T) {
  return new UnionType(...args);
}

describe("Union type checking", () => {
  it("42 === Union(String, Number)", () => {
    const isValid = typeIt("42", Union(String, Number));

    const value = "42" as any;
    if (typeIt(value, Union(String, Number))) {
      value;
    }

    expect(isValid).toStrictEqual(true);
  });
});
