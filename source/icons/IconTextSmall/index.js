// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTextSmallSvg from '../../_icons/18px/text.svg';

const IconTextSmall = styled(({ size, ...rest }) => <IconTextSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTextSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTextSmall.defaultProps = {
    size: 18,
};

// @component
export default IconTextSmall;
