import { typeIt } from "../src/utility/core/typeIt";
import { AsyncGeneratorFunction } from "../src/utility/types/generators/AsyncGeneratorFunction";
import { GeneratorFunction } from "../src/utility/types/generators/GeneratorFunction";
import { Union } from "../src/utility/union/Union";

describe("Empty tuple type checking", () => {
  it("[] === []", () => {
    const value = [] as unknown;
    const type = [] as const;

    const isValid = typeIt(value, type);
    expect(isValid).toStrictEqual(true);
  });
});

describe("Custom class type checking", () => {
  it("[a, b] === [A, B]", () => {
    const A = class {};
    const B = class {};

    const value = [new A(), new B()] as unknown;
    const type = [A, B] as const;

    const isValid = typeIt(value, type);
    expect(isValid).toStrictEqual(true);
  });

  it("[b, a] !== [A, B]", () => {
    const A = class {};
    const B = class {};

    const value = [new B(), new A()] as unknown;
    const type = [A, B] as const;

    const isValid = typeIt(value, type);
    expect(isValid).toStrictEqual(false);
  });

  it("[a, b] !== [A]", () => {
    const A = class {};
    const B = class {};

    const value = [new A(), new B()] as unknown;
    const type = [A] as const;

    const isValid = typeIt(value, type);
    expect(isValid).toStrictEqual(false);
  });

  it("[a] !== [A, B]", () => {
    const A = class {};
    const B = class {};

    const value = [new A()] as unknown;
    const type = [A, B] as const;

    const isValid = typeIt(value, type);
    expect(isValid).toStrictEqual(false);
  });
});

describe("Native types", () => {
  describe("Numbers", () => {
    describe("Number type checking", () => {
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

    describe("Literal number type checking", () => {
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
  });

  describe("Strings", () => {
    describe("String type checking", () => {
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

    describe("Literal string type checking", () => {
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
  });

  describe("Booleans", () => {
    describe("Boolean type checking", () => {
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

    describe("Literal boolean type checking", () => {
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
  });

  describe("Symbols", () => {
    describe("Symbol type checking", () => {
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

    describe("Literal symbol type checking", () => {
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
});

describe("Mixed typed tuples", () => {
  it("[a, 'foobar'] === [A, String]", () => {
    const A = class {};
    const value = [new A(), "foobar"];
    const isValid = typeIt(value, [A, String]);
    expect(isValid).toStrictEqual(true);
  });

  it("[a, 'foobar', 101] === [A, String, 101]", () => {
    const A = class {};
    const value = [new A(), "foobar", 101];
    const isValid = typeIt(value, [A, String, 101]);
    expect(isValid).toStrictEqual(true);
  });

  it("[a, 'foobar', 101] !== [B, String, 101]", () => {
    const A = class {};
    const B = class {};
    const value = [new A(), "foobar", 101];
    const isValid = typeIt(value, [B, String, 101]);
    expect(isValid).toStrictEqual(false);
  });
});

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

describe("Nested objects", () => {
  it("[{x: 'foobar'}] === [{x: String}]", () => {
    const value = [{ x: "foobar" }] as any;
    const isValid = typeIt(value, [{ x: String }]);
    expect(isValid).toStrictEqual(true);
  });

  it("[{x: 'foobar', y: 42}] !== [{x: String}]", () => {
    const value = [{ x: "foobar", y: 42 }] as any;
    const isValid = typeIt(value, [{ x: String }]);
    expect(isValid).toStrictEqual(false);
  });

  it("[{x: 'foobar'}] !== [{x: String, y: 42}]", () => {
    const value = [{ x: "foobar", y: 42 }] as any;
    const isValid = typeIt(value, [{ x: String }]);
    expect(isValid).toStrictEqual(false);
  });
});

describe("Deeply nested objects", () => {
  it("[{x:{y:[{z:42}]}}, 'foo'] === [[{x:{y:[{z:Number}]}}, 'foo']", () => {
    const value = [{ x: { y: [{ z: 42 }] } }, "foo"] as any;
    const isValid = typeIt(value, [{ x: { y: [{ z: 42 }] } }, "foo"]);
    expect(isValid).toStrictEqual(true);
  });

  it("[{x:{y:[{z:42}]}}, 'bar'] !== [[{x:{y:[{z:Number}]}}, 'foo']", () => {
    const value = [{ x: { y: [{ z: 42 }] } }, "bar"] as any;
    const isValid = typeIt(value, [{ x: { y: [{ z: 42 }] } }, "foo"]);
    expect(isValid).toStrictEqual(false);
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

describe("Union type checking", () => {
  it("42 === Union(String, Number)", () => {
    const isValid = typeIt("42", Union(String, Number));

    const value = "42" as any;
    if (typeIt(value, Union(String, Number))) {
      value;
    }

    expect(isValid).toStrictEqual(true);
  });
});
