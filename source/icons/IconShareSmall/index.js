// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconShareSmallSvg from '../../_icons/18px/share.svg';

const IconShareSmall = styled(({ size, ...rest }) => <IconShareSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconShareSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconShareSmall.defaultProps = {
    size: 18,
};

// @component
export default IconShareSmall;
