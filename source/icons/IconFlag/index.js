// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFlagSvg from '../../_icons/24x24/flag.svg';

const IconFlag = styled(IconFlagSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFlag.propTypes = {
    size: PropTypes.number,
};

IconFlag.defaultProps = {
    size: 24,
};

// @component
export default IconFlag;
