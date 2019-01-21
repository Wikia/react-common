// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLinkSvg from '../../_icons/24x24/link.svg';

const IconLink = styled(IconLinkSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLink.propTypes = {
    size: PropTypes.number,
};

IconLink.defaultProps = {
    size: 24,
};

// @component
export default IconLink;
