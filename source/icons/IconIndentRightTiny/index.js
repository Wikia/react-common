// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconIndentRightTinySvg from '../../_icons/12px/indent-right.svg';

const IconIndentRightTiny = styled(({ size, ...rest }) => <IconIndentRightTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconIndentRightTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconIndentRightTiny.defaultProps = {
    size: 12,
};

// @component
export default IconIndentRightTiny;
