import React from 'react';
import PropTypes from 'prop-types';

function escapeRegex(text) {
    return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * `HighlightedText` is a text node with highlighted text.
 */
const HighlightedText = ({ highlight, text }) => {
    if (highlight && highlight.length) {
        const highlightRegex = new RegExp(`(${escapeRegex(highlight.trim())})`, 'ig');
        const match = text.match(highlightRegex);
        const highlightedPart = match ? match[0] : match;
        const regularPart = text.replace(highlightRegex, '');

        return (
            <React.Fragment>
                {highlightedPart && (<mark>{highlightedPart}</mark>)}
                {regularPart}
            </React.Fragment>
        );
    }

    return text;
};

HighlightedText.propTypes = {
    highlight: PropTypes.string,
    text: PropTypes.string.isRequired,
};

HighlightedText.defaultProps = {
    highlight: null,
};


export default HighlightedText;
