// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconClipboardSvg from '../../_icons/24px/clipboard.svg';

const IconClipboard = styled(({ size, ...rest }) => <IconClipboardSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconClipboard.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconClipboard.defaultProps = {
    size: 24,
};

// @component
export default IconClipboard;
