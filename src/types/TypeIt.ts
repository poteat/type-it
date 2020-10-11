import { TypeWriter } from "./core/TypeWriter";
import { PredicateKind } from "./predicate/PredicateKind";

/**
 * The type interface associated with the `typeIt` function. The types and
 * values are written separately, to bypass limitations in the compiler.
 *
 * Of course, this means we're effectively asserting that the runtime
 * implementation does match this type structure, rather than letting the
 * compiler check that for us.
 *
 * The type structure itself is of a similar form to the runtime code, having
 * various sub-types implemented via type checks, which eventually recurse into
 * the main type body.
 *
 * The actual hover-text description of the underlying function is configured
 * below.
 */
export interface TypeIt {
  /**
   * Expresses a type predicate that `value` has the underlying type represented
   * by the `type` runtime type mapping.
   *
   * The underlying function both returns true/false if it validated, and tells
   * Typescript that the `value` is the associated type-level type.
   *
   * @param value Value to check.
   * @param type Runtime type representation mapping to validate against.
   *
   */
  <C extends PredicateKind>(value: unknown, type: C): value is TypeWriter<C>;
}
