// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconParagraphSmallSvg from '../../_icons/18px/paragraph.svg';

const IconParagraphSmall = styled(({ size, ...rest }) => <IconParagraphSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconParagraphSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconParagraphSmall.defaultProps = {
    size: 18,
};

// @component
export default IconParagraphSmall;
