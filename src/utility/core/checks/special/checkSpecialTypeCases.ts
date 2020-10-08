export function checkSpecialTypeCases(value: any, type: any) {
  return (
    (value?.then && type === Promise) ||
    (value?.stack && value?.message && type === Error)
  );
}
