// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSearchSvg from '../../_icons/24px/search.svg';

const IconSearch = styled(({ size, ...rest }) => <IconSearchSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSearch.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSearch.defaultProps = {
    size: 24,
};

// @component
export default IconSearch;
