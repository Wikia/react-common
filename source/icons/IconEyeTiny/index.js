// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconEyeTinySvg from '../../_icons/12px/eye.svg';

const IconEyeTiny = styled(({ size, ...rest }) => <IconEyeTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconEyeTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconEyeTiny.defaultProps = {
    size: 12,
};

// @component
export default IconEyeTiny;
