// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconReplySmallSvg from '../../_icons/18px/reply.svg';

const IconReplySmall = styled(({ size, ...rest }) => <IconReplySmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReplySmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReplySmall.defaultProps = {
    size: 18,
};

// @component
export default IconReplySmall;
