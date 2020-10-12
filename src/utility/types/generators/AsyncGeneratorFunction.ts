/**
 * The constructor of all asynchronous generators, convenient for checking and
 * specifying the type associated with such.
 *
 * Used by downstream applications who need to check whether a function is an
 * asynchronous generator.
 */
export const AsyncGeneratorFunction = async function* () {}.constructor;
