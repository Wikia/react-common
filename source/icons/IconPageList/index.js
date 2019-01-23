// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPageListSvg from '../../_icons/24px/page-list.svg';

const IconPageList = styled(({ size, ...rest }) => <IconPageListSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPageList.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPageList.defaultProps = {
    size: 24,
};

// @component
export default IconPageList;
