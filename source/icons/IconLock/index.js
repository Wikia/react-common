// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLockSvg from '../../_icons/24x24/lock.svg';

const IconLock = styled(IconLockSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLock.propTypes = {
    size: PropTypes.number,
};

IconLock.defaultProps = {
    size: 24,
};

// @component
export default IconLock;
