// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDocumentsSmallSvg from '../../_icons/18px/documents.svg';

const IconDocumentsSmall = styled(({ size, ...rest }) => <IconDocumentsSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDocumentsSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDocumentsSmall.defaultProps = {
    size: 18,
};

// @component
export default IconDocumentsSmall;
