import { Class } from "../../class/Class";
import { InstanceOf } from "../../instances/InstanceOf";

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
  : C extends PromiseConstructor
  ? Promise<any>
  : C extends ErrorConstructor
  ? Error
  : InstanceOf<C>;
