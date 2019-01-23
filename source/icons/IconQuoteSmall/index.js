// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuoteSmallSvg from '../../_icons/18px/quote.svg';

const IconQuoteSmall = styled(({ size, ...rest }) => <IconQuoteSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuoteSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconQuoteSmall.defaultProps = {
    size: 18,
};

// @component
export default IconQuoteSmall;
