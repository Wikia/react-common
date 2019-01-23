// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBulletedListSvg from '../../_icons/24px/bulleted-list.svg';

const IconBulletedList = styled(({ size, ...rest }) => <IconBulletedListSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBulletedList.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBulletedList.defaultProps = {
    size: 24,
};

// @component
export default IconBulletedList;
