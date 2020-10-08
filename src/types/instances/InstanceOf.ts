import { Class } from "../class/Class";

export type InstanceOf<C extends Class> = C extends Class<any[], infer R>
  ? R
  : any;
