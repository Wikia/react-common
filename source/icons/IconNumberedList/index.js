// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconNumberedListSvg from '../../_icons/24px/numbered-list.svg';

const IconNumberedList = styled(({ size, ...rest }) => <IconNumberedListSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconNumberedList.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconNumberedList.defaultProps = {
    size: 24,
};

// @component
export default IconNumberedList;
