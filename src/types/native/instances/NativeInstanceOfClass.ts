import { Class } from "../../class/Class";
import { InstanceOf } from "../../instances/InstanceOf";

/**
 * As appropriate, converts types into either their instance types, or in the
 * case of some special cases, their corresponding native type, e.g. `Number` =>
 * `number`, etc.
 */
export type NativeInstanceOfClass<C extends Class> = C extends NumberConstructor
  ? number
  : C extends StringConstructor
  ? string
  : C extends BooleanConstructor
  ? boolean
  : C extends SymbolConstructor
  ? symbol
  : C extends ObjectConstructor
  ? object
  : InstanceOf<C>;
