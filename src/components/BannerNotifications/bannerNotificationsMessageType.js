import PropTypes from 'prop-types';

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    permanent: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
});
