// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDownloadSvg from '../../_icons/24px/download.svg';

const IconDownload = styled(({ size, ...rest }) => <IconDownloadSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDownload.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDownload.defaultProps = {
    size: 24,
};

// @component
export default IconDownload;
