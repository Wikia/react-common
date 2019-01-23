// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserTinySvg from '../../_icons/12px/user.svg';

const IconUserTiny = styled(({ size, ...rest }) => <IconUserTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUserTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUserTiny.defaultProps = {
    size: 12,
};

// @component
export default IconUserTiny;
