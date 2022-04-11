"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lxViewToggler = _interopRequireDefault(require("lx-view-toggler"));

var _lxTextInput = _interopRequireDefault(require("lx-text-input"));

var _lxButton = _interopRequireDefault(require("lx-button"));

var _lxButtonRound = _interopRequireDefault(require("lx-button-round"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormBuilder = function FormBuilder(props) {
  var controls = props.controls,
      _props$showHeader = props.showHeader,
      showHeader = _props$showHeader === void 0 ? false : _props$showHeader,
      onCloseMenu = props.onCloseMenu,
      _props$onControlActio = props.onControlAction,
      onControlAction = _props$onControlActio === void 0 ? function () {} : _props$onControlActio; //Functions

  var controlSelector = function controlSelector(control) {
    var type = control.type;
    var name = control.name;
    var validations = control.validations;
    var incrementControlValidator = control && control.incrementControlValidator || 0;
    var placeholder;
    var label;

    switch (type) {
      case 'TEXT_INPUT':
        placeholder = control && control.placeholder;
        return /*#__PURE__*/_react["default"].createElement(_lxTextInput["default"], {
          placeholder: placeholder,
          onBlur: function onBlur(value) {
            return onControlAction(name, value);
          },
          validations: validations,
          incrementControlValidator: incrementControlValidator
        });

      case 'PASSWORD':
        placeholder = control && control.placeholder;
        return /*#__PURE__*/_react["default"].createElement(_lxTextInput["default"], {
          placeholder: placeholder,
          onBlur: function onBlur(value) {
            return onControlAction(name, value);
          },
          validations: validations,
          incrementControlValidator: incrementControlValidator
        });

      case 'BUTTON_1':
        label = control && control.label;
        var config = {
          buttonStyle: 'PRIMARY'
        };
        return /*#__PURE__*/_react["default"].createElement(_lxButton["default"], {
          onClick: function onClick() {
            return onControlAction(name);
          },
          config: config
        }, label);

      case 'BUTTON_2':
        label = control && control.label;
        return /*#__PURE__*/_react["default"].createElement(_lxButton["default"], {
          onClick: function onClick() {
            return onControlAction(name);
          }
        }, label);

      default:
        return null;
    }
  };

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(_lxViewToggler["default"], {
    topContent: showHeader ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_lxButtonRound["default"], {
      onClick: onCloseMenu
    })) : null,
    bottomContent: controls.map(function (control, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index
      }, controlSelector(control));
    })
  }));
};

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: +1;\n"])));

var _default = FormBuilder;
exports["default"] = _default;
