import PropTypes from 'prop-types';

export default PropTypes.shape({
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  id: PropTypes.string.isRequired,
  permanent: PropTypes.bool,
});
