import { Class } from "../class/Class";
import { NativeInstanceOfClass } from "../native/instances/NativeInstanceOfClass";
import { NativeType } from "../native/types/NativeType";

export type TypeWriter<T extends NativeType | Class> = T extends Class
  ? NativeInstanceOfClass<T>
  : T extends object
  ? {
      [key in keyof T]: T[key] extends NativeType | Class
        ? TypeWriter<T[key]>
        : never;
    }
  : T;
