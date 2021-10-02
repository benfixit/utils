/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param array
 * @param size
 * @returns
 */
const chunk = (array, size) => {
  const output = [];
  let inner = [];
  for (let i = 0; i < array.length; i++) {
    inner.push(array[i]);
    if (i % size === 0) {
      output.push(inner);
      inner = [];
    }
  }

  output.push(inner);

  return output;
};

export default chunk;
