// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDocumentsTinySvg from '../../_icons/12px/documents.svg';

const IconDocumentsTiny = styled(({ size, ...rest }) => <IconDocumentsTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDocumentsTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDocumentsTiny.defaultProps = {
    size: 12,
};

// @component
export default IconDocumentsTiny;
