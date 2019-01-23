// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPlaySvg from '../../_icons/24px/play.svg';

const IconPlay = styled(({ size, ...rest }) => <IconPlaySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPlay.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPlay.defaultProps = {
    size: 24,
};

// @component
export default IconPlay;
