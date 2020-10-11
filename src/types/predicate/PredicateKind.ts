import { Class } from "../class/Class";
import { NativeType } from "../native/types/NativeType";

/**
 * The runtime type value that is used to construct the underlying predicate
 * type. In general, it is an arbitrarily nested type
 */
export type PredicateKind = NativeType | Class;
