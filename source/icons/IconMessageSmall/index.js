// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMessageSmallSvg from '../../_icons/18px/message.svg';

const IconMessageSmall = styled(({ size, ...rest }) => <IconMessageSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMessageSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMessageSmall.defaultProps = {
    size: 18,
};

// @component
export default IconMessageSmall;
