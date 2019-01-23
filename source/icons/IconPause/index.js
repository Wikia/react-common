// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPauseSvg from '../../_icons/24px/pause.svg';

const IconPause = styled(({ size, ...rest }) => <IconPauseSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPause.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPause.defaultProps = {
    size: 24,
};

// @component
export default IconPause;
