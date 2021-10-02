"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Filter function
 * @param input
 * @param predicate
 * @returns
 */
var filter = function filter(input, predicate) {
  var result = [];

  for (var i = 0; i < input.length; i++) {
    if (predicate(input[i], i, input)) {
      result.push(input[i]);
    }
  }

  return result;
};

var _default = filter;
exports["default"] = _default;