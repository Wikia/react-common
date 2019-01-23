// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBoldActiveTinySvg from '../../_icons/12px/bold-active.svg';

const IconBoldActiveTiny = styled(({ size, ...rest }) => <IconBoldActiveTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBoldActiveTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBoldActiveTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBoldActiveTiny;
