import { Class } from "../class/Class";

/**
 * Converts a constructor type into that constructor's return type, i.e. the
 * type of the underlying instance of the constructor.
 *
 * Among other applications, is primarily used to support automatic inference of
 * custom class definitions which may be passed in.
 */
export type InstanceOf<C extends Class> = C extends Class<any[], infer R>
  ? R
  : any;
