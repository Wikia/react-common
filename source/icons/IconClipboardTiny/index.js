// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconClipboardTinySvg from '../../_icons/12px/clipboard.svg';

const IconClipboardTiny = styled(({ size, ...rest }) => <IconClipboardTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconClipboardTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconClipboardTiny.defaultProps = {
    size: 12,
};

// @component
export default IconClipboardTiny;
