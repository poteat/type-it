import { isTuple } from "../src/utility/core/isTuple";
import { AsyncGeneratorFunction } from "../src/utility/generators/AsyncGeneratorFunction";
import { GeneratorFunction } from "../src/utility/generators/GeneratorFunction";

describe("Empty tuple type checking", () => {
  it("[] === []", () => {
    const isValid = isTuple([], []);
    expect(isValid).toStrictEqual(true);
  });
});

describe("Custom class type checking", () => {
  it("[a, b] === [A, B]", () => {
    const A = class {};
    const B = class {};

    const instances = [new A(), new B()];

    const isValid = isTuple(instances, [A, B]);

    expect(isValid).toStrictEqual(true);
  });

  it("[b, a] !== [A, B]", () => {
    const A = class {};
    const B = class {};

    const instances = [new B(), new A()];

    const isValid = isTuple(instances, [A, B]);

    expect(isValid).toStrictEqual(false);
  });

  it("[a, b] !== [A]", () => {
    const A = class {};
    const B = class {};

    const instances = [new A(), new B()];

    const isValid = isTuple(instances, [A]);

    expect(isValid).toStrictEqual(false);
  });

  it("[a] !== [A, B]", () => {
    const A = class {};
    const B = class {};

    const instances = [new A()];

    const isValid = isTuple(instances, [A, B]);

    expect(isValid).toStrictEqual(false);
  });
});

describe("Native types", () => {
  describe("Numbers", () => {
    describe("Number type checking", () => {
      it("[5] === [Number]", () => {
        const values = [5] as any;
        const isValid = isTuple(values, [Number]);
        expect(isValid).toStrictEqual(true);
      });

      it(`['foobar'] !== [Number]`, () => {
        const values = ["foobar"] as any;
        const isValid = isTuple(values, [Number]);
        expect(isValid).toStrictEqual(false);
      });
    });

    describe("Literal number type checking", () => {
      it("[5] === [5]", () => {
        const values = [5] as any;
        const isValid = isTuple(values, [5]);
        expect(isValid).toStrictEqual(true);
      });

      it(`[10] !== [5]`, () => {
        const values = [10] as any;
        const isValid = isTuple(values, [5]);
        expect(isValid).toStrictEqual(false);
      });
    });
  });

  describe("Strings", () => {
    describe("String type checking", () => {
      it(`['foobar'] === [String]`, () => {
        const values = ["foobar"] as any;
        const isValid = isTuple(values, [String]);
        expect(isValid).toStrictEqual(true);
      });

      it(`[5] !== [String]`, () => {
        const values = [5] as any;
        const isValid = isTuple(values, [String]);
        expect(isValid).toStrictEqual(false);
      });
    });

    describe("Literal string type checking", () => {
      it(`['foobar'] === ['foobar']`, () => {
        const values = ["foobar"] as any;
        const isValid = isTuple(values, ["foobar"]);
        expect(isValid).toStrictEqual(true);
      });

      it(`['bar'] !== ['foobar']`, () => {
        const values = ["bar"] as any;
        const isValid = isTuple(values, ["foobar"]);
        expect(isValid).toStrictEqual(false);
      });
    });
  });

  describe("Booleans", () => {
    describe("Boolean type checking", () => {
      it(`[true] === [Boolean]`, () => {
        const values = [true] as any;
        const isValid = isTuple(values, [Boolean]);
        expect(isValid).toStrictEqual(true);
      });

      it(`[5] !== [Boolean]`, () => {
        const values = [5] as any;
        const isValid = isTuple(values, [Boolean]);
        expect(isValid).toStrictEqual(false);
      });
    });

    describe("Literal boolean type checking", () => {
      it(`[true] === [true]`, () => {
        const values = [true] as any;
        const isValid = isTuple(values, [true]);
        expect(isValid).toStrictEqual(true);
      });

      it(`[false] !== [true]`, () => {
        const values = [false] as any;
        const isValid = isTuple(values, [true]);
        expect(isValid).toStrictEqual(false);
      });
    });
  });

  describe("Symbols", () => {
    describe("Symbol type checking", () => {
      it(`[symbol] === [Symbol]`, () => {
        const values = [Symbol("foobar")] as any;
        const isValid = isTuple(values, [Symbol]);
        expect(isValid).toStrictEqual(true);
      });

      it(`[5] !== [Symbol]`, () => {
        const values = [5] as any;
        const isValid = isTuple(values, [Symbol]);
        expect(isValid).toStrictEqual(false);
      });
    });

    describe("Literal symbol type checking", () => {
      it(`[symbolA] === [symbolA]`, () => {
        const symbol = Symbol("A");
        const values = [symbol] as any;
        const isValid = isTuple(values, [symbol]);
        expect(isValid).toStrictEqual(true);
      });

      it(`[symbolA] !== [symbolB]`, () => {
        const values = [Symbol("A")] as any;
        const isValid = isTuple(values, [Symbol("B")]);
        expect(isValid).toStrictEqual(false);
      });
    });
  });
});

describe("Mixed typed tuples", () => {
  it("[a, 'foobar'] === [A, String]", () => {
    const A = class {};
    const values = [new A(), "foobar"];
    const isValid = isTuple(values, [A, String]);
    expect(isValid).toStrictEqual(true);
  });

  it("[a, 'foobar', 101] === [A, String, 101]", () => {
    const A = class {};
    const values = [new A(), "foobar", 101];
    const isValid = isTuple(values, [A, String, 101]);
    expect(isValid).toStrictEqual(true);
  });

  it("[a, 'foobar', 101] !== [B, String, 101]", () => {
    const A = class {};
    const B = class {};
    const values = [new A(), "foobar", 101];
    const isValid = isTuple(values, [B, String, 101]);
    expect(isValid).toStrictEqual(false);
  });
});

describe("Special duck-types", () => {
  describe("Promises", () => {
    it("[promise] === [Promise]", () => {
      const p = (async () => {})();
      const values = [p];
      const isValid = isTuple(values, [Promise]);
      expect(isValid).toStrictEqual(true);
    });

    it("[5] !== [Promise]", () => {
      const values = [5];
      const isValid = isTuple(values, [Promise]);
      expect(isValid).toStrictEqual(false);
    });
  });

  describe("Errors", () => {
    it("[error] === [Error]", () => {
      const e = new Error();
      const values = [e];
      const isValid = isTuple(values, [Error]);
      expect(isValid).toStrictEqual(true);
    });

    it("[5] !== [Error]", () => {
      const values = [5];
      const isValid = isTuple(values, ([Error, Error] as unknown) as Error[]);
      expect(isValid).toStrictEqual(false);
    });
  });
});

describe("Exotic types", () => {
  it("[generator] === [GeneratorFunction]", () => {
    const gen = function* () {};
    const values = [gen];
    const isValid = isTuple(values, [GeneratorFunction]);
    expect(isValid).toStrictEqual(true);
  });

  it("[asyncGenerator] !== [GeneratorFunction]", () => {
    const gen = async function* () {};
    const values = [gen];
    const isValid = isTuple(values, [GeneratorFunction]);
    expect(isValid).toStrictEqual(false);
  });

  it("[asyncGenerator] === [AsyncGeneratorFunction]", () => {
    const gen = async function* () {};
    const values = [gen];
    const isValid = isTuple(values, [AsyncGeneratorFunction]);
    expect(isValid).toStrictEqual(true);
  });
});

describe("Nested objects", () => {
  it("[{x: 'foobar'}] === [{x: String}]", () => {
    const values = [{ x: "foobar" }] as any;
    const isValid = isTuple(values, [{ x: String }]);
    expect(isValid).toStrictEqual(true);
  });

  it("[{x: 'foobar', y: 42}] !== [{x: String}]", () => {
    const values = [{ x: "foobar", y: 42 }] as any;
    const isValid = isTuple(values, [{ x: String }]);
    expect(isValid).toStrictEqual(false);
  });

  it("[{x: 'foobar'}] !== [{x: String, y: 42}]", () => {
    const values = [{ x: "foobar", y: 42 }] as any;
    const isValid = isTuple(values, [{ x: String }]);
    expect(isValid).toStrictEqual(false);
  });
});

describe("Deeply nested objects", () => {
  it("[{x:{y:[{z:42}]}}, 'foo'] === [[{x:{y:[{z:Number}]}}, 'foo']", () => {
    const values = [{ x: { y: [{ z: 42 }] } }, "foo"] as any;
    const isValid = isTuple(values, [{ x: { y: [{ z: 42 }] } }, "foo"]);
    expect(isValid).toStrictEqual(true);
  });

  it("[{x:{y:[{z:42}]}}, 'bar'] !== [[{x:{y:[{z:Number}]}}, 'foo']", () => {
    const values = [{ x: { y: [{ z: 42 }] } }, "bar"] as any;
    const isValid = isTuple(values, [{ x: { y: [{ z: 42 }] } }, "foo"]);
    expect(isValid).toStrictEqual(false);
  });
});

describe("Recursive types will throw stack error", () => {
  it("[{x:{x:{x:{x:...}}}}] === [{x:{x:{x:{x:...}}}}] will throw", () => {
    const type = { x: Number } as any;
    type.x = type;

    const isValid = () => isTuple([type], [type]);
    expect(isValid).toThrow();
  });
});
