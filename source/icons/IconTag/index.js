// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTagSvg from '../../_icons/24x24/tag.svg';

const IconTag = styled(IconTagSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTag.propTypes = {
    size: PropTypes.number,
};

IconTag.defaultProps = {
    size: 24,
};

// @component
export default IconTag;
