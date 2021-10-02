import { compact } from "@arrays";
/**
 * Joins an array of classnames and returns a string
 * @param classes
 * @returns
 */
const className = (classes) => {
  return compact(classes).join(" ");
};

export default className;
