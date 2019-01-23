// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCloseSmallSvg from '../../_icons/18px/close.svg';

const IconCloseSmall = styled(({ size, ...rest }) => <IconCloseSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCloseSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCloseSmall.defaultProps = {
    size: 18,
};

// @component
export default IconCloseSmall;
