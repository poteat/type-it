import { checkTupleRecursiveTypeCases } from "./checkTupleRecursiveTypeCases";

describe("Mixed typed tuples", () => {
  it("[a, 'foobar'] === [A, String]", () => {
    const A = class {};
    const value = [new A(), "foobar"];
    const isValid = checkTupleRecursiveTypeCases(value, [A, String]);
    expect(isValid).toStrictEqual(true);
  });

  it("[a, 'foobar', 101] === [A, String, 101]", () => {
    const A = class {};
    const value = [new A(), "foobar", 101];
    const isValid = checkTupleRecursiveTypeCases(value, [A, String, 101]);
    expect(isValid).toStrictEqual(true);
  });

  it("[a, 'foobar', 101] !== [B, String, 101]", () => {
    const A = class {};
    const B = class {};
    const value = [new A(), "foobar", 101];
    const isValid = checkTupleRecursiveTypeCases(value, [B, String, 101]);
    expect(isValid).toStrictEqual(false);
  });
});

describe("Deeply nested tuples", () => {
  it("[{x:{y:[{z:42}]}}, 'foo'] === [[{x:{y:[{z:Number}]}}, 'foo']", () => {
    const value = [{ x: { y: [{ z: 42 }] } }, "foo"] as any;
    const isValid = checkTupleRecursiveTypeCases(value, [
      { x: { y: [{ z: 42 }] } },
      "foo",
    ]);
    expect(isValid).toStrictEqual(true);
  });

  it("[{x:{y:[{z:42}]}}, 'bar'] !== [[{x:{y:[{z:Number}]}}, 'foo']", () => {
    const value = [{ x: { y: [{ z: 42 }] } }, "bar"] as any;
    const isValid = checkTupleRecursiveTypeCases(value, [
      { x: { y: [{ z: 42 }] } },
      "foo",
    ]);
    expect(isValid).toStrictEqual(false);
  });
});
