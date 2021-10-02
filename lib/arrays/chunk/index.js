"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param array
 * @param size
 * @returns
 */
var chunk = function chunk(array, size) {
  var output = [];
  var inner = [];

  for (var i = 0; i < array.length; i++) {
    inner.push(array[i]);

    if (i % size === 0) {
      output.push(inner);
      inner = [];
    }
  }

  output.push(inner);
  return output;
};

var _default = chunk;
exports["default"] = _default;