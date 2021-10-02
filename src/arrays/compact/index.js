import isArray from ".";

/**
 * Creates an array with all the falsey values removed. The values false, null, 0, "", undefined, and NaN are
 * falsey.
 * @param array The array to be compact
 * @returns Returns the new array of filtered values
 */
const compact = (array) => {
  const result = [];
  if (!isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
};

export default compact;
