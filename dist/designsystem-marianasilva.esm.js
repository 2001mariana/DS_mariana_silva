import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

var _templateObject$3, _templateObject2;
var LabelStyled = /*#__PURE__*/styled.label(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    color: #002F52;\n    display: block;\n    font-weight: 700;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-left: 16px;\n    margin-bottom: 8px\n"])));
var InputStyled = /*#__PURE__*/styled.input(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    font-size: 16px;\n    line-height: 24px;\n    padding: 8px 24px;\n    color: #002F52;\n    border: 1px solid #002F52;\n    border-radius: 45px;\n    width: 100%;\n    box-sizing: border-box;\n    &:focus{\n        outline: none;\n    }\n"])));
var ABInput = function ABInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type;
  return React.createElement("div", null, React.createElement(LabelStyled, null, label), React.createElement(InputStyled, {
    type: type,
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }));
};

var _templateObject$4;
var SectionStyled = /*#__PURE__*/styled.section(_templateObject$4 || (_templateObject$4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    width: 194px;\n    height: 88px;\n    background: ", ";\n    border: 1px solid;\n    border-color: ", ";\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    text-align: center;\n    margin: 10px;\n    font-family: sans-serif;\n    cursor: pointer;\n    header {\n        color: ", ";\n        font-size: 12px;\n        font-weight: 400;\n    }\n    strong {\n        color: ", ";;\n        font-weight: 700;\n        font-size: 16px;\n    }\n    footer {\n        color: ", ";;\n        font-weight: 400;\n        font-size: 12px;\n    }\n"])), function (props) {
  return props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF';
}, function (props) {
  return props.selecionado ? '#002F52' : '#EB9B00';
}, function (props) {
  return props.selecionado ? '#FFF' : '#EB9B00';
}, function (props) {
  return props.selecionado ? '#FFF' : '#EB9B00';
}, function (props) {
  return props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)';
});
var ABOptionGroup = function ABOptionGroup(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      valueDefault = _ref.valueDefault;

  var _useState = useState(valueDefault != null ? valueDefault : null),
      selected = _useState[0],
      setSelected = _useState[1];

  var onSelect = function onSelect(option) {
    setSelected(option);
    onChange && onChange(option);
  };

  return React.createElement(React.Fragment, null, options.map(function (option) {
    return React.createElement(SectionStyled, {
      onClick: function onClick() {
        return onSelect(option);
      },
      key: option.id,
      selecionado: (selected == null ? void 0 : selected.id) == option.id
    }, React.createElement("header", null, option.title), React.createElement("div", null, React.createElement("strong", null, option.body)), React.createElement("footer", null, option.footer));
  }));
};

var _templateObject$5, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5;
var ButtonStyled$1 = /*#__PURE__*/styled.button(_templateObject$5 || (_templateObject$5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    background: #002F52;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n    border: none;\n    cursor: pointer;\n    color: #FFF;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n"])));
var SpanStyled = /*#__PURE__*/styled.span(_templateObject2$1 || (_templateObject2$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    font-size: 18px;\n    line-height: 27px;\n    display: inline-block;\n    margin: 0 12px;\n    color: #002F52;\n    font-family: Arial, Helvetica, sans-serif;\n"])));
var FlexContainerStyled = /*#__PURE__*/styled.div(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])));
var ContainerStyled = /*#__PURE__*/styled.div(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    width: 100px;\n    text-align: center;\n    display: inline-block;\n"])));
var LabelStyled$1 = /*#__PURE__*/styled.label(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n    color: #002F52;\n    display: block;\n    font-weight: 700;\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif;\n    margin-bottom: 8px;\n"])));
var AbInputQuant = function AbInputQuant(_ref) {
  var onChange = _ref.onChange;

  var _useState = useState(1),
      value = _useState[0],
      setValue = _useState[1];

  useEffect(function () {
    if (onChange) {
      onChange(Number(value));
    }
  }, [value]);
  return React.createElement(ContainerStyled, null, React.createElement(LabelStyled$1, null, "Quantidade"), React.createElement(FlexContainerStyled, null, React.createElement(ButtonStyled$1, {
    onClick: function onClick() {
      return setValue(function (prev) {
        return prev - 1;
      });
    }
  }, "-"), React.createElement(SpanStyled, null, value), React.createElement(ButtonStyled$1, {
    onClick: function onClick() {
      return setValue(function (prev) {
        return prev + 1;
      });
    }
  }, "+")));
};

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

export { ABInput, ABOptionGroup, ABTag, ABbutton, AbInputQuant, Card, Thing };
//# sourceMappingURL=designsystem-marianasilva.esm.js.map
