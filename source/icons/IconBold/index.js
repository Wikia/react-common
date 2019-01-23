// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBoldSvg from '../../_icons/24px/bold.svg';

const IconBold = styled(({ size, ...rest }) => <IconBoldSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBold.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBold.defaultProps = {
    size: 24,
};

// @component
export default IconBold;
