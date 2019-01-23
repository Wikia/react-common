// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBulletedListSmallSvg from '../../_icons/18px/bulleted-list.svg';

const IconBulletedListSmall = styled(({ size, ...rest }) => <IconBulletedListSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBulletedListSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBulletedListSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBulletedListSmall;
