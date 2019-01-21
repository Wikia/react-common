// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMenuSvg from '../../_icons/24x24/menu.svg';

const IconMenu = styled(IconMenuSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMenu.propTypes = {
    size: PropTypes.number,
};

IconMenu.defaultProps = {
    size: 24,
};

// @component
export default IconMenu;
