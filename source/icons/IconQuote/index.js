// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuoteSvg from '../../_icons/24x24/quote.svg';

const IconQuote = styled(IconQuoteSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuote.propTypes = {
    size: PropTypes.number,
};

IconQuote.defaultProps = {
    size: 24,
};

// @component
export default IconQuote;
