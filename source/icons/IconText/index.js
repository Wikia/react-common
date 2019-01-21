// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTextSvg from '../../_icons/24x24/text.svg';

const IconText = styled(IconTextSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconText.propTypes = {
    size: PropTypes.number,
};

IconText.defaultProps = {
    size: 24,
};

// @component
export default IconText;
