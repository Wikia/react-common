// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconWatchSvg from '../../_icons/24px/watch.svg';

const IconWatch = styled(({ size, ...rest }) => <IconWatchSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconWatch.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconWatch.defaultProps = {
    size: 24,
};

// @component
export default IconWatch;
