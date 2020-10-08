import { TypeErrorMap } from "../errors/composite/TypeErrorMap";
import { NativeInstanceOf } from "../native/instances/NativeInstanceOf";
import { PredicateKind } from "../predicate/PredicateKind";

export interface isTupleInterface {
  /**
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping. Value must be a tuple.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type. Type must
   * be a tuple.
   *
   * @param value ValValue to check.
   * @param type Runtime type representation mapping to validate against.
   *
   * `Debug: This is the [A, B, C] overload.`
   */
  <C extends [PredicateKind, PredicateKind, PredicateKind]>(
    value: unknown,
    type: C
  ): value is [
    NativeInstanceOf<C[0]>,
    NativeInstanceOf<C[1]>,
    NativeInstanceOf<C[2]>
  ];

  /**
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping. Value must be a tuple.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type. Type must
   * be a tuple.
   *
   * @param value Value to check.
   * @param type Runtime type representation mapping to validate against.
   *
   * `Debug: This is the [A, B] overload.`
   */
  <C extends [PredicateKind, PredicateKind]>(
    value: unknown,
    type: C
  ): value is [NativeInstanceOf<C[0]>, NativeInstanceOf<C[1]>];

  /**
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping. Value must be a tuple.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type. Type must
   * be a tuple.
   *
   * @param value Value to check.
   * @param type Runtime type representation mapping to validate against.
   *
   * `Debug: This is the [A] overload.`
   */
  <C extends readonly [PredicateKind]>(value: unknown, type: C): value is [
    NativeInstanceOf<C[0]>
  ];

  /**
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping. Value must be a tuple.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type. Type must
   * be a tuple.
   *
   * @param value Value to check.
   * @param type Runtime type representation mapping to validate against.
   *
   * `Debug: This is the [] overload.`
   */
  <T>(tuple: unknown, expectedTuple: []): tuple is T[];

  /**
   * # `⚠️ ERROR ⚠️ ERROR ⚠️ ERROR ⚠️`
   * ## **_`TUPLES MUST BE OF FINITE LENGTH`_**
   *
   * Somewhere in your type stack there is an element that Typescript is
   * inferring as an array type. Effectively, it never makes sense to have
   * elements in the type map to have arbitrary length type, since they
   * effectively form _kinds_. Besides, this project is called `is-tuple` not
   * `is-array` after all :^).
   *
   * This error will also show up if your tuple is larger than a preconfigured
   * length, since we cannot perform constructor inference on variadic types at
   * the time of writing.
   *
   * ---
   *
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping. Value must be a tuple.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type. Type must
   * be a tuple.
   *
   * @param value Value to check.
   * @param type Runtime type representation mapping to validate against.
   */
  <C extends PredicateKind[]>(
    value: unknown,
    type: C
  ): value is TypeErrorMap["needFiniteLength"];
}
