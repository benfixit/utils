"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isArray = _interopRequireDefault(require("./isArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates an array with all the falsey values removed. The values false, null, 0, "", undefined, and NaN are
 * falsey.
 * @param array The array to be compact
 * @returns Returns the new array of filtered values
 */
var compact = function compact(array) {
  var result = [];

  if (!(0, _isArray["default"])(array)) {
    return result;
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
};

var _default = compact;
exports["default"] = _default;