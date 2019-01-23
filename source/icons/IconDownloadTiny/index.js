// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDownloadTinySvg from '../../_icons/12px/download.svg';

const IconDownloadTiny = styled(({ size, ...rest }) => <IconDownloadTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDownloadTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDownloadTiny.defaultProps = {
    size: 12,
};

// @component
export default IconDownloadTiny;
