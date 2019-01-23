// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPauseTinySvg from '../../_icons/12px/pause.svg';

const IconPauseTiny = styled(({ size, ...rest }) => <IconPauseTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPauseTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPauseTiny.defaultProps = {
    size: 12,
};

// @component
export default IconPauseTiny;
