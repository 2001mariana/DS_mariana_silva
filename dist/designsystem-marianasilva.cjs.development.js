'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var ButtonStyled = /*#__PURE__*/styled.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    padding: ", ";\n    border: 2px solid #EB9B00;\n    color: ", ";\n    cursor: pointer;\n    font-size: ", ";\n    border-radius: 3px;\n    transition: background-color 0.75s, border-color 0.75s, color 0.75s;\n\n    &:hover {\n        background-color: ", " ;\n        border-color: #B87900;\n        color: ", ";\n        transition: background-color 0.75s, border-color 0.75s, color 0.75s;\n    }\n"])), function (props) {
  return props.color === 'Primary' ? '#EB9B00' : '#FFFFFF';
}, function (props) {
  return props.size === 'large' ? '16px 32px' : '8px 16px';
}, function (props) {
  return props.color === 'Primary' ? '#FFFFFF' : '#EB9B00';
}, function (props) {
  return props.size === 'large' ? '20px' : '14px';
}, function (props) {
  return props.color === 'Primary' ? '#B87900' : '#FFFFFF';
}, function (props) {
  return props.color === 'Primary' ? '#FFFFFF' : '#B87900';
});
var ABbutton = function ABbutton(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'Primary' : _ref$color,
      text = _ref.text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled, {
    onClick: onClick,
    color: color,
    size: size
  }, text);
};

var _templateObject$1;
var CardStyled = /*#__PURE__*/styled.div(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    padding: 48px;\n    background: #FFFFFF;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n"])));
var Card = function Card(_ref) {
  var children = _ref.children;
  return React.createElement(CardStyled, null, children);
};

var _templateObject$2;
var TagStyled = /*#__PURE__*/styled.div(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    padding: 14px 22px;\n    color: #FFFFFF;\n    background: #EB9B00;\n    font-weight: 700;\n    font-size: 24px;\n    display: inline-block;\n    font-family: sans-serif;\n"])));
var ABTag = function ABTag(_ref) {
  var texto = _ref.texto;
  return React.createElement(TagStyled, null, texto);
};

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

exports.ABTag = ABTag;
exports.ABbutton = ABbutton;
exports.Card = Card;
exports.Thing = Thing;
//# sourceMappingURL=designsystem-marianasilva.cjs.development.js.map
