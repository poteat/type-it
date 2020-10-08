![type-it](./logo/type-it.png)

> An npm library for checking types at runtime. No build steps, clear and simple syntax.

---

## Installation

```sh
npm i ts-type-it
```

---

## Usage

```ts
import { typeIt } from "type-it"

const value = { x: "foobar" } as any;

if (typeIt(value, { x: String })) { // Passes!

  x; // TS::{x:string}
}
```

type-it takes in any value to check, along with a simple type object. It returns a boolean value with full type inference.

---
## Deep Support

type-it is as powerful as it is simple. It has support for tuples, strings, numbers, literals, booleans, symbols, Promises, Generators, AsyncGenerators, and nested structures, right out-of-the-box.

type-it also supports any class you define, with zero extra code.  For example:

```ts
import { typeIt } from "ts-type-it"

class MyClass { }

const value = {
  x: [{y: new MyClass()}],
  z: Number
} as any;

const type = {x:[{y:MyClass}],z:42} as const;

if (typeIt(value, type)) {

  value; // TS::{x:[{y:MyClass}],z:Number}
}
```

Note, to use tuples or literals, the keyword 'as const' is needed to prevent
Typescript from automatically widening the types. This is how you unlock
length-specific tuple validation as well as literal string typing.

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
