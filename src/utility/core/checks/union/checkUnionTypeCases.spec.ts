import { Union } from "../../../union/Union";
import { checkUnionTypeCases } from "./checkUnionTypeCases";

describe("Union type checking", () => {
  it("42 === Union(String, Number)", () => {
    const isValid = checkUnionTypeCases("42", Union(String, Number));

    const value = "42" as any;
    if (checkUnionTypeCases(value, Union(String, Number))) {
      value;
    }

    expect(isValid).toStrictEqual(true);
  });
});
