import { typeIt } from "../../src";
import { Union } from "../../src/utility/union/Union";

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
