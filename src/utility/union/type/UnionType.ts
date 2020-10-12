class UnionType<T extends any[]> {
  subtypes: T;

  constructor(...args: T) {
    this.subtypes = args;
  }
}
