// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconParagraphSvg from '../../_icons/24px/paragraph.svg';

const IconParagraph = styled(({ size, ...rest }) => <IconParagraphSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconParagraph.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconParagraph.defaultProps = {
    size: 24,
};

// @component
export default IconParagraph;
