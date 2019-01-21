import PropTypes from 'prop-types';

// to make it work with SSR
const Element = typeof global.Element === 'undefined' ? () => {} : global.Element;

export default PropTypes.shape({current: PropTypes.instanceOf(Element)})
