import { UnionType } from "../../utility/union/type/UnionType";
import { TypeWriter } from "../core/TypeWriter";

/**
 * If the type in question is a subtype of UnionType, we loop over all subtypes
 * and return the types after all native transformations have been completely.
 * Finally, we convert that transformed tuple into a union type by accessing it
 * via `number`.
 *
 * We support arbitrary depth union types via calling TypeWriter on subsequent
 * iterations.
 */
export type ResolveUnionType<T extends UnionType<any[]>> = {
  [key in keyof T["subtypes"]]: TypeWriter<T["subtypes"][key]>;
}[number];
