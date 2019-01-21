// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBellSvg from '../../_icons/24x24/bell.svg';

const IconBell = styled(IconBellSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBell.propTypes = {
    size: PropTypes.number,
};

IconBell.defaultProps = {
    size: 24,
};

// @component
export default IconBell;
