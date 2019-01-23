// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTrashSmallSvg from '../../_icons/18px/trash.svg';

const IconTrashSmall = styled(({ size, ...rest }) => <IconTrashSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTrashSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTrashSmall.defaultProps = {
    size: 18,
};

// @component
export default IconTrashSmall;
