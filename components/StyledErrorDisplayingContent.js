'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    align-content: center;\n    color: red;\n    display: flex;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #fff;\n    padding: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.div(_templateObject());
var Message = styled.div(_templateObject2());
/**
 * A standard error message when content cannot be displayed.
 */

function StyledErrorDisplayingContent() {
  return React.createElement(Wrapper, null, React.createElement(Message, null, "Sorry, we\u2019re having trouble displaying this content right now."));
}

module.exports = StyledErrorDisplayingContent;
