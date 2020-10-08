import { List } from "../list/List";

export type Class<P extends List = any[], R extends object = object> = {
  new (...args: P): R;
};
