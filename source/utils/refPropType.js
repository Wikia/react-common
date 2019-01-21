import PropTypes from 'prop-types';

// to make it work with SSR
const Element = typeof Element === 'undefined' ? () => {} : Element;

export default PropTypes.shape({current: PropTypes.instanceOf(Element)})
