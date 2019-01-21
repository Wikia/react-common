// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMenuControlSvg from '../../_icons/24x24/menu-control.svg';

const IconMenuControl = styled(IconMenuControlSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMenuControl.propTypes = {
    size: PropTypes.number,
};

IconMenuControl.defaultProps = {
    size: 24,
};

// @component
export default IconMenuControl;
