// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFacebookTinySvg from '../../_icons/12px/facebook.svg';

const IconFacebookTiny = styled(({ size, ...rest }) => <IconFacebookTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFacebookTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFacebookTiny.defaultProps = {
    size: 12,
};

// @component
export default IconFacebookTiny;
