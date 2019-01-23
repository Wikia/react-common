// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTrashEmptySvg from '../../_icons/24px/trash-empty.svg';

const IconTrashEmpty = styled(({ size, ...rest }) => <IconTrashEmptySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTrashEmpty.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTrashEmpty.defaultProps = {
    size: 24,
};

// @component
export default IconTrashEmpty;
