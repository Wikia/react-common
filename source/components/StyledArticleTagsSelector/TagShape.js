import PropTypes from 'prop-types';

const TagShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
});

export default TagShape;
