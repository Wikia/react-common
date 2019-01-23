// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMoreSvg from '../../_icons/24px/more.svg';

const IconMore = styled(({ size, ...rest }) => <IconMoreSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMore.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMore.defaultProps = {
    size: 24,
};

// @component
export default IconMore;
