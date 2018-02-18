module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleValidation = function (_React$Component) {
  _inherits(SimpleValidation, _React$Component);

  function SimpleValidation(props) {
    _classCallCheck(this, SimpleValidation);

    var _this2 = _possibleConstructorReturn(this, (SimpleValidation.__proto__ || Object.getPrototypeOf(SimpleValidation)).call(this, props));

    _this2.state = {
      isValid: true,
      validationCriteria: {},
      validationMessage: {},
      value: props.value || '',
      message: ""
    };

    _this2.change = _this2.change.bind(_this2);
    return _this2;
  }

  _createClass(SimpleValidation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;
      var newCriteriaState = {};
      var newMessageState = {};

      try {
        this.props.validations.map(function (validation) {
          newCriteriaState[validation.name] = validation.condition;
          newMessageState[validation.name] = validation.message;
        });
      } catch (e) {
        console.log(e);
      }

      this.setState({ 'validationCriteria': newCriteriaState });
      this.setState({ 'validationMessage': newMessageState });
    }
  }, {
    key: 'validate',
    value: function validate(name, value) {
      var validations = this.state.validationCriteria;
      var messages = this.state.validationMessage;
      var message = "";

      for (var criteria in validations) {
        if (validations.hasOwnProperty(criteria)) {
          if (true) {
            message += messages[criteria];
          }
        }
      }

      this.setState({ 'message': message });

      if (value.length < 5) {
        return false;
      }

      return true;
    }
  }, {
    key: 'change',
    value: function change(e) {
      var name = e.currentTarget.name;
      var value = e.currentTarget.value;

      this.state.isValid = this.validate(name, value);
      this.setState({ value: value });
    }
  }, {
    key: 'buildErrorMessage',
    value: function buildErrorMessage(name) {
      return _react2.default.createElement(
        'div',
        null,
        this.state.message
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var message = null;
      if (!this.state.isValid) {
        message = this.buildErrorMessage('test');
      }

      return _react2.default.createElement(
        'div',
        null,
        'This is so Fancy!',
        _react2.default.createElement('input', { name: this.props.name, type: this.props.type, value: this.state.value, onChange: this.change }),
        message
      );
    }
  }]);

  return SimpleValidation;
}(_react2.default.Component);

exports.default = SimpleValidation;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map