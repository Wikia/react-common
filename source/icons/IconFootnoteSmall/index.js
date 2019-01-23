// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFootnoteSmallSvg from '../../_icons/18px/footnote.svg';

const IconFootnoteSmall = styled(({ size, ...rest }) => <IconFootnoteSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFootnoteSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFootnoteSmall.defaultProps = {
    size: 18,
};

// @component
export default IconFootnoteSmall;
