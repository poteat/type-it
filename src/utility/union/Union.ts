export function Union<T extends any[]>(...args: T) {
  return new UnionType(...args);
}
