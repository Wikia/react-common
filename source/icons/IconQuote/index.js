// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuoteSvg from '../../_icons/24px/quote.svg';

const IconQuote = styled(({ size, ...rest }) => <IconQuoteSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuote.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconQuote.defaultProps = {
    size: 24,
};

// @component
export default IconQuote;
