/**
 * Filter function
 * @param input
 * @param predicate
 * @returns
 */
const filter = (input, predicate) => {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (predicate(input[i], i, input)) {
      result.push(input[i]);
    }
  }

  return result;
};

export default filter;
