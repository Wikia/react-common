// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDocumentsSvg from '../../_icons/24px/documents.svg';

const IconDocuments = styled(({ size, ...rest }) => <IconDocumentsSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDocuments.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDocuments.defaultProps = {
    size: 24,
};

// @component
export default IconDocuments;
