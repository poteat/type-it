import { AsyncGeneratorFunction } from "../../../types/generators/AsyncGeneratorFunction";
import { GeneratorFunction } from "../../../types/generators/GeneratorFunction";
import { typeIt } from "../../typeIt";

describe("Exotic types", () => {
  it("[generator] === [GeneratorFunction]", () => {
    const gen = function* () {};
    const value = [gen];
    const isValid = typeIt(value, [GeneratorFunction]);
    expect(isValid).toStrictEqual(true);
  });

  it("[asyncGenerator] !== [GeneratorFunction]", () => {
    const gen = async function* () {};
    const value = [gen];
    const isValid = typeIt(value, [GeneratorFunction]);
    expect(isValid).toStrictEqual(false);
  });

  it("[asyncGenerator] === [AsyncGeneratorFunction]", () => {
    const gen = async function* () {};
    const value = [gen];
    const isValid = typeIt(value, [AsyncGeneratorFunction]);
    expect(isValid).toStrictEqual(true);
  });
});
