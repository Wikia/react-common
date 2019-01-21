// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconHouseSvg from '../../_icons/12x12/house.svg';

const IconHouse = styled(IconHouseSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconHouse.propTypes = {
    size: PropTypes.number,
};

IconHouse.defaultProps = {
    size: 24,
};

// @component
export default IconHouse;
