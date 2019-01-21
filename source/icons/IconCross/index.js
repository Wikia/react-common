// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCrossSvg from '../../_icons/24x24/cross.svg';

const IconCross = styled(IconCrossSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCross.propTypes = {
    size: PropTypes.number,
};

IconCross.defaultProps = {
    size: 24,
};

// @component
export default IconCross;
