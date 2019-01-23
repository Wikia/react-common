// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMessageSvg from '../../_icons/24px/message.svg';

const IconMessage = styled(({ size, ...rest }) => <IconMessageSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMessage.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMessage.defaultProps = {
    size: 24,
};

// @component
export default IconMessage;
