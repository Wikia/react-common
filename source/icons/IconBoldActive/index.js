// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBoldActiveSvg from '../../_icons/24px/bold-active.svg';

const IconBoldActive = styled(({ size, ...rest }) => <IconBoldActiveSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBoldActive.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBoldActive.defaultProps = {
    size: 24,
};

// @component
export default IconBoldActive;
