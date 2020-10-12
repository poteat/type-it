/**
 * A utility function that simply checks whether or not its parameters are both
 * arrays of equal length.
 *
 * @param a First array to check.
 * @param b Second array to check.
 */
export function arraysAreOfEqualLength(a: any[], b: any[]): a is any[] {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length;
}
