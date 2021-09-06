const { ArrayUtils } = require("../lib");

// @ts-ignore
console.log(ArrayUtils.filter([2, 3, 4, 6], (item) => item % 2 === 0));
