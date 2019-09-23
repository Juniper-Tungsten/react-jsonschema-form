"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ajv = undefined;

var _Form = require("./components/Form");

var _Form2 = _interopRequireDefault(_Form);

var _validate = require("./validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ajv = exports.Ajv = _validate.ajv;
exports.default = _Form2.default;