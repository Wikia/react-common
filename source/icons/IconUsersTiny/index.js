// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUsersTinySvg from '../../_icons/12px/users.svg';

const IconUsersTiny = styled(({ size, ...rest }) => <IconUsersTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUsersTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUsersTiny.defaultProps = {
    size: 12,
};

// @component
export default IconUsersTiny;
