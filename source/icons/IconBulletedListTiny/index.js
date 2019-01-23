// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBulletedListTinySvg from '../../_icons/12px/bulleted-list.svg';

const IconBulletedListTiny = styled(({ size, ...rest }) => <IconBulletedListTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBulletedListTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBulletedListTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBulletedListTiny;
