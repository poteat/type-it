/**
 * Runtime representation of a "union" type. Each subtype represents one the
 * possible runtime types that can check. If none check, the over-all union
 * type does not check.
 *
 * We represent this structure as a class, so we can identify an instance of it
 * at runtime.
 */
export class UnionType<T extends any[]> {
  subtypes: T;

  constructor(...args: T) {
    this.subtypes = args;
  }
}
