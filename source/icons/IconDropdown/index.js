// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDropdownSvg from '../../_icons/24x24/dropdown.svg';

const IconDropdown = styled(IconDropdownSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDropdown.propTypes = {
    size: PropTypes.number,
};

IconDropdown.defaultProps = {
    size: 24,
};

// @component
export default IconDropdown;
