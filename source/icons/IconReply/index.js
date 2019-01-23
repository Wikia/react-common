// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconReplySvg from '../../_icons/24px/reply.svg';

const IconReply = styled(({ size, ...rest }) => <IconReplySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReply.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReply.defaultProps = {
    size: 24,
};

// @component
export default IconReply;
