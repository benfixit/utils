"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _arrays = require("../arrays");

/**
 * Joins an array of classnames and returns a string
 * @param classes
 * @returns
 */
var className = function className(classes) {
  return (0, _arrays.compact)(classes).join(" ");
};

var _default = className;
exports["default"] = _default;