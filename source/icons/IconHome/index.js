// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconHomeSvg from '../../_icons/24px/home.svg';

const IconHome = styled(({ size, ...rest }) => <IconHomeSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconHome.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconHome.defaultProps = {
    size: 24,
};

// @component
export default IconHome;
