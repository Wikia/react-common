// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTagSvg from '../../_icons/24px/tag.svg';

const IconTag = styled(({ size, ...rest }) => <IconTagSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTag.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTag.defaultProps = {
    size: 24,
};

// @component
export default IconTag;
