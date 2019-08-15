import PropTypes from 'prop-types';

const TagShape = PropTypes.shape({
    articleId: PropTypes.string.isRequired,
    articleTitle: PropTypes.string.isRequired,
    url: PropTypes.string,
});

export default TagShape;
