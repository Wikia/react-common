// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImagesTinySvg from '../../_icons/12px/images.svg';

const IconImagesTiny = styled(({ size, ...rest }) => <IconImagesTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImagesTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconImagesTiny.defaultProps = {
    size: 12,
};

// @component
export default IconImagesTiny;
