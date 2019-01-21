// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconGearSvg from '../../_icons/24x24/gear.svg';

const IconGear = styled(IconGearSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconGear.propTypes = {
    size: PropTypes.number,
};

IconGear.defaultProps = {
    size: 24,
};

// @component
export default IconGear;
