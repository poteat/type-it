import { typeIt } from "../../typeIt";

describe("Special duck-types", () => {
  describe("Promises", () => {
    it("[promise] === [Promise]", () => {
      const p = (async () => {})();
      const value = [p];
      const isValid = typeIt(value, [Promise]);
      expect(isValid).toStrictEqual(true);
    });

    it("[5] !== [Promise]", () => {
      const value = [5];
      const isValid = typeIt(value, [Promise]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Errors", () => {
    it("[error] === [Error]", () => {
      const e = new Error();
      const value = [e];
      const isValid = typeIt(value, [Error]);
      expect(isValid).toStrictEqual(true);
    });

    it("[5] !== [Error]", () => {
      const value = [5];
      const isValid = typeIt(value, ([Error, Error] as unknown) as Error[]);
      expect(isValid).toStrictEqual(false);
    });
  });
});
