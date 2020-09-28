import React from 'react';
import PropTypes from 'prop-types';

function escapeRegex(text) {
  return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
/**
 * `HighlightedText` is a text node with highlighted text.
 */


var HighlightedText = function HighlightedText(_ref) {
  var highlight = _ref.highlight,
      text = _ref.text;

  if (typeof highlight === 'string' && highlight.length) {
    var highlightRegex = new RegExp("(".concat(escapeRegex(highlight.trim()), ")"), 'ig');
    var newHtml = text.replace(highlightRegex, function (m) {
      return "<mark>".concat(m, "</mark>");
    });
    return (// eslint-disable-next-line react/no-danger
      React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: newHtml
        }
      })
    );
  }

  return React.createElement("span", null, text);
};

HighlightedText.propTypes = {
  highlight: PropTypes.string,
  text: PropTypes.string.isRequired
};
HighlightedText.defaultProps = {
  highlight: undefined
};

export default HighlightedText;
