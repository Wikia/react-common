import React from 'react';
import PropTypes from 'prop-types';

function escapeRegex(text) {
    return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * `HighlightedText` is a text node with highlighted text.
 */
const HighlightedText = ({ highlight, text }) => {
    if (typeof highlight === 'string' && highlight.length) {
        const highlightRegex = new RegExp(`(${escapeRegex(highlight.trim())})`, 'ig');
        const newHtml = text.replace(highlightRegex, m => `<mark>${m}</mark>`);

        return (
            <span dangerouslySetInnerHTML={{ __html: newHtml }} />
        );
    }

    return <span>{text}</span>;
};

HighlightedText.propTypes = {
    highlight: PropTypes.string,
    text: PropTypes.string.isRequired,
};

HighlightedText.defaultProps = {
    highlight: undefined,
};


export default HighlightedText;
