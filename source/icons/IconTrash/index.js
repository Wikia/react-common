// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTrashSvg from '../../_icons/24x24/trash.svg';

const IconTrash = styled(IconTrashSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTrash.propTypes = {
    size: PropTypes.number,
};

IconTrash.defaultProps = {
    size: 24,
};

// @component
export default IconTrash;
