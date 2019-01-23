// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTextSvg from '../../_icons/24px/text.svg';

const IconText = styled(({ size, ...rest }) => <IconTextSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconText.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconText.defaultProps = {
    size: 24,
};

// @component
export default IconText;
