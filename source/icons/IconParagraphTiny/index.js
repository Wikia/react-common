// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconParagraphTinySvg from '../../_icons/12px/paragraph.svg';

const IconParagraphTiny = styled(({ size, ...rest }) => <IconParagraphTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconParagraphTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconParagraphTiny.defaultProps = {
    size: 12,
};

// @component
export default IconParagraphTiny;
