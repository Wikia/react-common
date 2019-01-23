// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAddSvg from '../../_icons/24px/add.svg';

const IconAdd = styled(({ size, ...rest }) => <IconAddSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAdd.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconAdd.defaultProps = {
    size: 24,
};

// @component
export default IconAdd;
