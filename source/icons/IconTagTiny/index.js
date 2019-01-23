// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTagTinySvg from '../../_icons/12px/tag.svg';

const IconTagTiny = styled(({ size, ...rest }) => <IconTagTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTagTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTagTiny.defaultProps = {
    size: 12,
};

// @component
export default IconTagTiny;
