import { Class } from "../../class/Class";
import { NativeType } from "../types/NativeType";
import { NativeInstanceOfClass } from "./class/NativeInstanceOfClass";

export type NativeInstanceOf<T extends NativeType | Class> = T extends Class
  ? NativeInstanceOfClass<T>
  : T extends object
  ? {
      [key in keyof T]: T[key] extends NativeType | Class
        ? NativeInstanceOf<T[key]>
        : never;
    }
  : T;
