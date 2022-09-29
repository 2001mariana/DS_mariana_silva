import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var ButtonStyled = /*#__PURE__*/styled.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    background-color: #EB9B00;\n    padding: 16px 32px;\n    border: 2px solid #EB9B00;\n    color: #ffffff;\n    cursor: pointer;\n    font-size: 20px;\n    border-radius: 3px;\n    transition: background-color 0.5s, border-color 0.5s, color 0.5s;\n\n    &:hover {\n        background-color: #B87900;\n        border-color: #B87900;\n    }\n"])));
var ABbutton = function ABbutton() {
  return React.createElement(ButtonStyled, null, "Click Me");
};

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

export { ABbutton, Thing };
//# sourceMappingURL=designsystem-marianasilva.esm.js.map
