import { Class } from "../class/Class";
import { NativeInstanceOfClass } from "../native/instances/NativeInstanceOfClass";

/**
 * The core `typeIt` type that converts runtime types into their actual base
 * type instantiations.
 *
 * For constructor types (i.e. class types), it converts that constructor type
 * into the base instance type of that class (i.e. the class instance type).
 *
 * For types like `Number` or `String`, we convert that built-in constructor
 * type to the native `number` and `string` types respectively.
 *
 * For record and array types, we construct a new record or array type with all
 * attributes of that type converted via the same process. This works fine for
 * types which are recursive themselves (i.e. the compiler does not infinitely
 * loop). Instead, the underlying recursive type is converted to an anonymous
 * recursive type.
 */
export type TypeWriter<T> = T extends Class
  ? NativeInstanceOfClass<T>
  : T extends object
  ? {
      [key in keyof T]: TypeWriter<T[key]>;
    }
  : T;
