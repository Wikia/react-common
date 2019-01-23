// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSearchSmallSvg from '../../_icons/18px/search.svg';

const IconSearchSmall = styled(({ size, ...rest }) => <IconSearchSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSearchSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSearchSmall.defaultProps = {
    size: 18,
};

// @component
export default IconSearchSmall;
