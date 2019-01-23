// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconClipboardSmallSvg from '../../_icons/18px/clipboard.svg';

const IconClipboardSmall = styled(({ size, ...rest }) => <IconClipboardSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconClipboardSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconClipboardSmall.defaultProps = {
    size: 18,
};

// @component
export default IconClipboardSmall;
