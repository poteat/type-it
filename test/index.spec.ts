import { hi } from "../src";

describe("hi works", () => {
  it("basic", () => {
    expect(hi()).toStrictEqual("hi");
  });
});
