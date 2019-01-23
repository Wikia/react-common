// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconWatchSmallSvg from '../../_icons/18px/watch.svg';

const IconWatchSmall = styled(({ size, ...rest }) => <IconWatchSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconWatchSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconWatchSmall.defaultProps = {
    size: 18,
};

// @component
export default IconWatchSmall;
