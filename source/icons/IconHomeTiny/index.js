// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconHomeTinySvg from '../../_icons/12px/home.svg';

const IconHomeTiny = styled(({ size, ...rest }) => <IconHomeTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconHomeTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconHomeTiny.defaultProps = {
    size: 12,
};

// @component
export default IconHomeTiny;
