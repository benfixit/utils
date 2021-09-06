"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isArray = function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
};

var _default = isArray;
exports["default"] = _default;