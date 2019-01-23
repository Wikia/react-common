// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconReplyTinySvg from '../../_icons/12px/reply.svg';

const IconReplyTiny = styled(({ size, ...rest }) => <IconReplyTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReplyTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReplyTiny.defaultProps = {
    size: 12,
};

// @component
export default IconReplyTiny;
