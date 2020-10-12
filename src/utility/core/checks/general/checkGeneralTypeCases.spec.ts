import { typeIt } from "../../typeIt";

describe("General native types", () => {
  describe("Numbers", () => {
    it("[5] === [Number]", () => {
      const value = [5] as unknown;
      const isValid = typeIt(value, [Number] as const);
      expect(isValid).toStrictEqual(true);
    });

    it(`['foobar'] !== [Number]`, () => {
      const value = ["foobar"] as any;
      const isValid = typeIt(value, [Number] as const);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Strings", () => {
    it(`['foobar'] === [String]`, () => {
      const value = ["foobar"] as any;
      const isValid = typeIt(value, [String]);
      expect(isValid).toStrictEqual(true);
    });

    it(`[5] !== [String]`, () => {
      const value = [5] as any;
      const isValid = typeIt(value, [String]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Booleans", () => {
    it(`[true] === [Boolean]`, () => {
      const value = [true] as any;
      const isValid = typeIt(value, [Boolean]);
      expect(isValid).toStrictEqual(true);
    });

    it(`[5] !== [Boolean]`, () => {
      const value = [5] as any;
      const isValid = typeIt(value, [Boolean]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Symbols", () => {
    it(`[symbol] === [Symbol]`, () => {
      const value = [Symbol("foobar")] as any;
      const isValid = typeIt(value, [Symbol]);
      expect(isValid).toStrictEqual(true);
    });

    it(`[5] !== [Symbol]`, () => {
      const value = [5] as any;
      const isValid = typeIt(value, [Symbol]);
      expect(isValid).toStrictEqual(false);
    });
  });
});
