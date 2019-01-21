// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxSvg from '../../_icons/24x24/check box.svg';

const IconCheckBox = styled(IconCheckBoxSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBox.propTypes = {
    size: PropTypes.number,
};

IconCheckBox.defaultProps = {
    size: 24,
};

// @component
export default IconCheckBox;
