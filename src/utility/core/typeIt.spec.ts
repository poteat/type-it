import { typeIt } from "./typeIt";

describe("Empty tuple type checking", () => {
  it("[] === []", () => {
    const value = [] as unknown;
    const type = [] as const;

    const isValid = typeIt(value, type);
    expect(isValid).toStrictEqual(true);
  });
});

describe("Recursive types will throw stack error", () => {
  it("[{x:{x:{x:{x:...}}}}] === [{x:{x:{x:{x:...}}}}] will throw", () => {
    const type = { x: Number } as any;
    type.x = type;

    const isValid = () => typeIt([type], [type]);
    expect(isValid).toThrow();
  });
});
