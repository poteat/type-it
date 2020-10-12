import { typeIt } from "../../typeIt";

describe("Native literal types", () => {
  describe("Numbers", () => {
    it("[5] === [5]", () => {
      const value = [5] as any;
      const isValid = typeIt(value, [5]);
      expect(isValid).toStrictEqual(true);
    });

    it(`[10] !== [5]`, () => {
      const value = [10] as any;
      const isValid = typeIt(value, [5]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Strings", () => {
    it(`['foobar'] === ['foobar']`, () => {
      const value = ["foobar"] as any;
      const isValid = typeIt(value, ["foobar"]);
      expect(isValid).toStrictEqual(true);
    });

    it(`['bar'] !== ['foobar']`, () => {
      const value = ["bar"] as any;
      const isValid = typeIt(value, ["foobar"]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Booleans", () => {
    it(`[true] === [true]`, () => {
      const value = [true] as any;
      const isValid = typeIt(value, [true]);
      expect(isValid).toStrictEqual(true);
    });

    it(`[false] !== [true]`, () => {
      const value = [false] as any;
      const isValid = typeIt(value, [true]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Symbols", () => {
    it(`[symbolA] === [symbolA]`, () => {
      const symbol = Symbol("A");
      const value = [symbol] as any;
      const isValid = typeIt(value, [symbol]);
      expect(isValid).toStrictEqual(true);
    });

    it(`[symbolA] !== [symbolB]`, () => {
      const value = [Symbol("A")] as any;
      const isValid = typeIt(value, [Symbol("B")]);
      expect(isValid).toStrictEqual(false);
    });
  });
});
