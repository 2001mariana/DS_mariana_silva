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

var _templateObject$6;
var ButtonStyled$2 = /*#__PURE__*/styled.button(_templateObject$6 || (_templateObject$6 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: ", " ;\n  color: ", ";\n  border: 1px solid #65c944;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", " ;\n    border-color: #21a53740;\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: #1c7e2c;\n    box-shadow: 0 0 0 0.75px #1c7e2c;\n    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n  }\n\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n    box-shadow: 0 0 0 3.5px #1c7e2c;\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.variant === 'solid' ? '#65c944' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ffffff' : '#65c944';
}, function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
}, function (props) {
  return props.variant === 'solid' ? '#21a53740' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#1c7e2c' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : '#1c7e2c';
}, function (props) {
  return props.variant === 'solid' ? '#1c7e2c' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : '#1c7e2c';
});
var ButtonGreen = function ButtonGreen(_ref) {
  var label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$2, {
    onClick: onClick,
    variant: variant,
    size: size
  }, label);
};

var _templateObject$7;
var ButtonStyled$3 = /*#__PURE__*/styled.button(_templateObject$7 || (_templateObject$7 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: ", " ;\n  color: ", ";\n  border: 1px solid #d34644;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", " ;\n    border-color: #ef535040;\n  }\n\n    &:focus {\n          background-color: ", ";\n          box-shadow: 0 0 0 3.5px #ce4b49;\n          font-weight: 600;\n    }\n\n    &:hover {\n          background-color: '#ce4b49';\n          border-color: #ce4b49;\n        }\n  "])), function (props) {
  return props.variant === 'solid' ? '#de5856' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ffffff' : '#de5856';
}, function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
}, function (props) {
  return props.variant === 'solid' ? '#ef535040' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ce4b49' : 'transparent';
});
var ButtonDanger = function ButtonDanger(_ref) {
  var label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$3, {
    size: size,
    variant: variant,
    onClick: onClick
  }, label);
};

var _templateObject$8;
var ButtonStyled$4 = /*#__PURE__*/styled.button(_templateObject$8 || (_templateObject$8 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: ", " ;\n  color: ", ";\n  border: 1px solid black;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  &:disabled {\n    pointer-events: none;\n    background-color:'#0c1e0f40';\n    border-color: #0c1e0f40;\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 0 0 3.5px black;\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.variant === 'solid' ? 'black' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : 'black';
}, function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
}, function (props) {
  return props.variant === 'solid' ? 'black' : 'transparent';
});
var ButtonBlack = function ButtonBlack(_ref) {
  var label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$4, {
    onClick: onClick,
    variant: variant,
    size: size
  }, label);
};

var _templateObject$9;
var ButtonStyled$5 = /*#__PURE__*/styled.button(_templateObject$9 || (_templateObject$9 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color:  #000000 ;\n  position: relative;\n  color: #FFFFFF;\n  border: 1px solid #000000;\n  border-radius: 8px;\n  user-select: none; \n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  display: inline-flex;\n  z-index: 0;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  :before {\n  content: \"\";\n  background: linear-gradient(45deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5, #002bff, #7a00ff,#ff00c8, #ff0000);\n  position: absolute;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  animation: button-led 20s linear infinite;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n@keyframes button-led {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n\n\n\n"])), function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
});
var ButtonLed = function ButtonLed(_ref) {
  var label = _ref.label,
      size = _ref.size,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$5, {
    onClick: onClick,
    size: size
  }, label);
};

var _templateObject$a;
var ButtonStyled$6 = /*#__PURE__*/styled.button(_templateObject$a || (_templateObject$a = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: ", " ;\n  color: ", ";\n  border: 1px solid #598ccb;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 1.25s, border-color 1.25s, box-shadow 1.25s,\n    color 1.25s;\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", " ;\n    border-color: #406ba040;\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: #406ba0;\n    box-shadow: 0 0 0 0.75px #3b6393;\n    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n  }\n\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n    box-shadow: 0 0 0 3.5px #3b6393;\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.variant === 'solid' ? '#598ccb' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ffffff' : '#598ccb';
}, function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
}, function (props) {
  return props.variant === 'solid' ? '#406ba040' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#3b6393' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : '#3b6393';
}, function (props) {
  return props.variant === 'solid' ? '#3b6393' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : '#3b6393';
});
var ButtonBlue = function ButtonBlue(_ref) {
  var label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$6, {
    onClick: onClick,
    variant: variant,
    size: size
  }, label);
};

var _templateObject$b;
var ButtonStyled$7 = /*#__PURE__*/styled.button(_templateObject$b || (_templateObject$b = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: ", " ;\n  color: ", ";\n  border: 1px solid #ffc107;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 1.25s, border-color 1.25s, box-shadow 1.25s,\n    color 1.25s;\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", " ;\n    border-color: #ffc72040;\n  }\n\n  &:hover {\n    background-color:  ", " ;\n    color: ", " ;\n    border-color: #ffc720;    \n    box-shadow: 0 0 0 0.75px #ffcd39;\n    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n  }\n\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n    box-shadow: 0 0 0 2.5px #ffcd39;\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.variant === 'solid' ? '#ffc107' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ffffff' : '#ffc107';
}, function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
}, function (props) {
  return props.variant === 'solid' ? '#ffc72040' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ffc720' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : '#efba1a';
}, function (props) {
  return props.variant === 'solid' ? '#ffcd39' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : '#ffc720';
});
var ButtonYellow = function ButtonYellow(_ref) {
  var label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$7, {
    onClick: onClick,
    variant: variant,
    size: size
  }, label);
};

var _templateObject$c;
var ButtonStyled$8 = /*#__PURE__*/styled.button(_templateObject$c || (_templateObject$c = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --pink-light-main: ", ";\n  --pink-light-main-disabled: ", ";\n  --pink-light-main-hover: ", ";\n\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  background-color: ", " ;\n  color: ", ";\n  border: 1px solid var(--pink-light-main);\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 1.25s, border-color 1.25s, box-shadow 1.25s,\n    color 1.25s;\n\n  &:disabled {\n    pointer-events: none;\n    background-color: ", " ;\n    border-color: 'var(--pink-light-main-disabled';\n  }\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    border-color: var(--pink-light-main-hover);\n    box-shadow: 0 0 0 0.75px var(--pink-light-main-hover);\n    transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n  }\n\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n    box-shadow: 0 0 0 3.5px var(--pink-light-main-hover);\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.intensity === 'light' ? '#ff99c1' : '#FF0065';
}, function (props) {
  return props.intensity === 'light' ? '#ff8da140' : '#FF006540';
}, function (props) {
  return props.intensity === 'light' ? '#ff7fb2' : '#e5005a';
}, function (props) {
  return props.variant === 'solid' ? 'var(--pink-light-main)' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#ffffff' : 'var(--pink-light-main)';
}, function (props) {
  return props.size === 'small' ? '120px' : props.size === 'medium' ? '170px' : '220px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
}, function (props) {
  return props.variant === 'solid' ? 'var(--pink-light-main-disabled)' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? 'var(--pink-light-main-hover)' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : 'var(--pink-light-main-hover)';
}, function (props) {
  return props.variant === 'solid' ? 'var(--pink-light-main-hover)' : 'transparent';
}, function (props) {
  return props.variant === 'solid' ? '#FFFFFF' : 'var(--pink-light-main-hover)';
});
var ButtonPink = function ButtonPink(_ref) {
  var label = _ref.label,
      size = _ref.size,
      variant = _ref.variant,
      intensity = _ref.intensity,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$8, {
    onClick: onClick,
    variant: variant,
    intensity: intensity,
    size: size
  }, label);
};

var _templateObject$d;
var ButtonStyled$9 = /*#__PURE__*/styled.button(_templateObject$d || (_templateObject$d = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --pink-light-main: ", ";\n  --pink-light-main-after: ", ";\n\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: var(--pink-light-main);\n  color: #FFFFFF;\n  border: 1px solid var(--pink-light-main);\n  border-radius: 8px;\n  user-select: none; \n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  display: inline-flex;\n  z-index: 0;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  :before {\n  content: \"\";\n  background: linear-gradient(45deg,#ff81e1, #ff9ae7,#ffbcef, #ff45d1,#ff9ae6, #ff66e0, #ff81e1,#F865FA, #fa6fe5);\n  position: absolute;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  animation: button-led 20s infinite;\n  border-radius: 10px;\n}\n\n@keyframes button-led {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--pink-light-main-after);\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n\n"])), function (props) {
  return props.intensity === 'light' ? '#FFCDF340' : '#e5005a70';
}, function (props) {
  return props.intensity === 'light' ? '#FFCDF340' : '#e5005a90';
}, function (props) {
  return props.size === 'small' ? '100px' : props.size === 'medium' ? '150px' : '200px';
}, function (props) {
  return props.size === 'small' ? '32px' : props.size === 'medium' ? '40px' : '48px';
});
var ButtonPinkLed = function ButtonPinkLed(_ref) {
  var label = _ref.label,
      size = _ref.size,
      intensity = _ref.intensity,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$9, {
    onClick: onClick,
    size: size,
    intensity: intensity
  }, label);
};

var _templateObject$e;
var ButtonStyled$a = /*#__PURE__*/styled.button(_templateObject$e || (_templateObject$e = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --blue-bg-color: ", ";\n  --blue-bg-color-after: ", ";\n\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: var(--blue-bg-color);\n  color: #FFFFFF;\n  border: 1px solid var(--blue-bg-color);\n  border-radius: 6px;\n  user-select: none; \n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  display: inline-flex;\n  z-index: 0;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  :before {\n  content: \"\";\n  background: linear-gradient(45deg,#a6a4e9,#607FBD,#2986CC, #4560f1,#6f82e8, #7191b5, #6c97be,#d2d1f4);\n  position: absolute;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  animation: button-led 20s infinite;\n  border-radius: 8px;\n}\n\n@keyframes button-led {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--blue-bg-color-after);\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n\n"])), function (props) {
  return props.intensity === 'light' ? '#a9ceea' : '#073a6770';
}, function (props) {
  return props.intensity === 'light' ? '#a9ceea' : '#073a6790';
}, function (props) {
  return props.size === 'small' ? '100px' : props.size === 'medium' ? '150px' : '200px';
}, function (props) {
  return props.size === 'small' ? '28px' : props.size === 'medium' ? '34px' : '42px';
});
var ButtonBlueLed = function ButtonBlueLed(_ref) {
  var label = _ref.label,
      size = _ref.size,
      intensity = _ref.intensity,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$a, {
    onClick: onClick,
    size: size,
    intensity: intensity
  }, label);
};

var _templateObject$f;
var ButtonStyled$b = /*#__PURE__*/styled.button(_templateObject$f || (_templateObject$f = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --green-bg-color: ", ";\n  --green-bg-color-after: ", ";\n\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: var(--green-bg-color);\n  color: #FFFFFF;\n  border: 1px solid var(--green-bg-color);\n  border-radius: 6px;\n  user-select: none; \n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  display: inline-flex;\n  z-index: 0;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  :before {\n  content: \"\";\n  background: linear-gradient(45deg,#b9ff1c,#28ce00,#B4F225, #82e214,#7db500, #a1e800, #4df225,#b2ff02);\n  position: absolute;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  animation: button-led 20s infinite;\n  border-radius: 8px;\n}\n\n@keyframes button-led {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--green-bg-color-after);\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n\n"])), function (props) {
  return props.intensity === 'light' ? '#B4F22570' : '	#4fa86180';
}, function (props) {
  return props.intensity === 'light' ? '#B4F22570' : '	#4fa86180';
}, function (props) {
  return props.size === 'small' ? '100px' : props.size === 'medium' ? '150px' : '200px';
}, function (props) {
  return props.size === 'small' ? '28px' : props.size === 'medium' ? '34px' : '42px';
});
var ButtonGreenLed = function ButtonGreenLed(_ref) {
  var label = _ref.label,
      size = _ref.size,
      intensity = _ref.intensity,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$b, {
    onClick: onClick,
    size: size,
    intensity: intensity
  }, label);
};

var _templateObject$g;
var ButtonStyled$c = /*#__PURE__*/styled.button(_templateObject$g || (_templateObject$g = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  --green-bg-color: ", ";\n  --green-bg-color-after: ", ";\n\n  font-family: sans-serif;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  background-color: var(--green-bg-color);\n  border: 1px solid var(--green-bg-color);\n  color: #FFFFFF;\n  text-shadow: 1px 1px 2px #fdd700, 0 0 1em #fdc400, 0 0 0.2em #fdaf00;\n  border-radius: 6px;\n  user-select: none; \n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  display: inline-flex;\n  z-index: 0;\n  font-weight: 600;\n  outline: none;\n  padding: 7.5px 15px;\n  min-width: ", " ;\n  height: ", ";\n  transition: background-color 0.75s, border-color 0.75s, box-shadow 0.75s,\n    color 0.75s;\n\n  :before {\n  content: \"\";\n  background: linear-gradient(45deg,#fef67f,\t#fdd900,#FAED59, #fff44b,#fdd700, #fff118, #fdee00,#FFD966);\n  position: absolute;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  animation: button-led 20s infinite;\n  border-radius: 8px;\n}\n\n@keyframes button-led {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: var(--green-bg-color-after);\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n\n"])), function (props) {
  return props.intensity === 'light' ? '#fbf51350' : '	#fdd70070';
}, function (props) {
  return props.intensity === 'light' ? '#fbf51350' : '	#fdd70080';
}, function (props) {
  return props.size === 'small' ? '100px' : props.size === 'medium' ? '150px' : '200px';
}, function (props) {
  return props.size === 'small' ? '28px' : props.size === 'medium' ? '34px' : '42px';
});
var ButtonYellowLed = function ButtonYellowLed(_ref) {
  var label = _ref.label,
      size = _ref.size,
      intensity = _ref.intensity,
      onClick = _ref.onClick;
  return React.createElement(ButtonStyled$c, {
    onClick: onClick,
    size: size,
    intensity: intensity
  }, label);
};

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

export { ABInput, ABOptionGroup, ABTag, ABbutton, AbInputQuant, ButtonBlack, ButtonBlue, ButtonBlueLed, ButtonDanger, ButtonGreen, ButtonGreenLed, ButtonLed, ButtonPink, ButtonPinkLed, ButtonYellow, ButtonYellowLed, Card, Thing };
//# sourceMappingURL=designsystem-marianasilva.esm.js.map
