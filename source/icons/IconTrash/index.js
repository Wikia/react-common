// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTrashSvg from '../../_icons/24px/trash.svg';

const IconTrash = styled(({ size, ...rest }) => <IconTrashSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTrash.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTrash.defaultProps = {
    size: 24,
};

// @component
export default IconTrash;
