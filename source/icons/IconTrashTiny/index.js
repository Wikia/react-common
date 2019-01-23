// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTrashTinySvg from '../../_icons/12px/trash.svg';

const IconTrashTiny = styled(({ size, ...rest }) => <IconTrashTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTrashTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTrashTiny.defaultProps = {
    size: 12,
};

// @component
export default IconTrashTiny;
