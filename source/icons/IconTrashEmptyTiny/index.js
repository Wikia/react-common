// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTrashEmptyTinySvg from '../../_icons/12px/trash-empty.svg';

const IconTrashEmptyTiny = styled(({ size, ...rest }) => <IconTrashEmptyTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTrashEmptyTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTrashEmptyTiny.defaultProps = {
    size: 12,
};

// @component
export default IconTrashEmptyTiny;
