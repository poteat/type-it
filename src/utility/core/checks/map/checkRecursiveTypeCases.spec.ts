import { checkRecursiveTypeCases } from "./checkRecursiveTypeCases";

describe("Nested objects", () => {
  it("{x: 'foobar'} === {x: String}", () => {
    const value = { x: "foobar" } as any;
    const isValid = checkRecursiveTypeCases(value, { x: String });
    expect(isValid).toStrictEqual(true);
  });

  it("{x: 'foobar', y: 42} !== {x: String}", () => {
    const value = { x: "foobar", y: 42 } as any;
    const isValid = checkRecursiveTypeCases(value, { x: String });
    expect(isValid).toStrictEqual(false);
  });

  it("{x: 'foobar'} !== {x: String, y: 42}", () => {
    const value = { x: "foobar", y: 42 } as any;
    const isValid = checkRecursiveTypeCases(value, [{ x: String }]);
    expect(isValid).toStrictEqual(false);
  });
});
