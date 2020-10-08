![template](./logo/template.png)

> An npm library for checking types at runtime. No extra build steps, simple and obvious syntax.

---

## Installation

```sh
npm i type-it
```

---

## Usage

```ts
import { typeIt } from "type-it"

const x = {x: "foobar"} as any;

if (typeIt(foobar, {x: String})) {

  x; // TS::string
}
```

type-it takes in any value to check, and a simply written type, and returns a boolean value with full type inference.

---
## Support

type-it is as powerful as it is simple. It has support for tuples, strings, numbers, literals, booleans, symbols, Promises, Generators, AsyncGenerators, nested structures, and any class you define, out-of-the-box.

For example:

```ts
import { typeIt } from "type-it"

class MyClass { }

const value = {
  x: [{y: new MyClass()}],
  z: Number
} as any;

const type = {x:[{y:MyClass}], z: 42};

if (typeIt(value, type)) {

  value; // TS::{x:[{y:MyClass}],z:Number}
}
```

---

## Literals

You can type-check against literals (again, arbitrarily nested) and everything will still work:


```ts
import { typeIt } from "type-it"

const value = 400 as any;
const type = 42;

if (typeIt(value, type)) { // will return false as 400 !== 42

  value; // TS::{x:42}
}
```

This library can be used for validating parameters all the way to validating complex payloads, all with a minimum conceptual overhead. If you know Typescript, you know how to use type-it.

---

## Contribution

Contribution is encouraged! If I missed anything, or there's a use-case I didn't consider, definitely feel free to file an issue and/or PR. This project is licensed under the MIT license as most npm packages are. (see [license.md](./license.md)).
