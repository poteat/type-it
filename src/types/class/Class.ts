import { List } from "../list/List";

/**
 * Essentially, a Class is any function-object with implements a class
 * constructor.
 *
 * All classes in Typescript have both a "dynamic" type and a "static" type. The
 * class itself, rather than a particular instance of the class, is what houses
 * both the constructor as well as any static variables or members associated
 * with that class.
 */
export type Class<P extends List = any[], R extends object = object> = {
  new (...args: P): R;
};
