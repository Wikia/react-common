// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMessageTinySvg from '../../_icons/12px/message.svg';

const IconMessageTiny = styled(({ size, ...rest }) => <IconMessageTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMessageTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMessageTiny.defaultProps = {
    size: 12,
};

// @component
export default IconMessageTiny;
