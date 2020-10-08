import { NativeInstanceOf } from "../native/instances/NativeInstanceOf";
import { PredicateKind } from "../predicate/PredicateKind";

export interface isTupleInterface {
  /**
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping. Value must be a tuple.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type.
   *
   * @param value Value to check.
   * @param type Runtime type representation mapping to validate against.
   *
   */
  <C extends PredicateKind>(value: unknown, type: C): value is NativeInstanceOf<
    C
  >;
}
