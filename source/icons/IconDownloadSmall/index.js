// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDownloadSmallSvg from '../../_icons/18px/download.svg';

const IconDownloadSmall = styled(({ size, ...rest }) => <IconDownloadSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDownloadSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDownloadSmall.defaultProps = {
    size: 18,
};

// @component
export default IconDownloadSmall;
