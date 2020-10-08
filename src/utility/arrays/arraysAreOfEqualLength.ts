export function arraysAreOfEqualLength(a: any[], b: any[]): a is any[] {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length;
}
