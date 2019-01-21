// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckmarkSvg from '../../_icons/24x24/checkmark.svg';

const IconCheckmark = styled(IconCheckmarkSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckmark.propTypes = {
    size: PropTypes.number,
};

IconCheckmark.defaultProps = {
    size: 24,
};

// @component
export default IconCheckmark;
