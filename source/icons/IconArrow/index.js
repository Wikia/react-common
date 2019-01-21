// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconArrowSvg from '../../_icons/24x24/arrow.svg';

const IconArrow = styled(IconArrowSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconArrow.propTypes = {
    size: PropTypes.number,
};

IconArrow.defaultProps = {
    size: 24,
};

// @component
export default IconArrow;
