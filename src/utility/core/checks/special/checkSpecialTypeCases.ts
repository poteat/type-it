/**
 * We check via so-called "duck typing" whether or not the value matches the
 * type in some special cases, for instances whereby there is no other robust
 * solution that to manually check the attributes of the value.
 *
 * @param value Value to check for
 * @param type Type to validate against
 */
export function checkSpecialTypeCases(value: any, type: any) {
  return (
    (value?.then && type === Promise) ||
    (value?.stack && value?.message && type === Error)
  );
}
