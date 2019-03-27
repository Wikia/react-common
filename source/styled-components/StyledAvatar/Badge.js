import PropTypes from 'prop-types';
import styled from 'styled-components';

import BadgeComponent from '../../components/Avatar/Badge';

const Badge = styled(BadgeComponent)`
    height: ${props => `${props.size}px`};
    left: ${props => `${-1 * props.size / (props.diameter > 48 ? 4.5 : 3.5)}px`};
    line-height: 0;
    min-width: ${props => `${props.size}px`};
    position: absolute;
    top: ${props => `${-1 * props.size / (props.diameter > 48 ? 3.5 : 2.5)}px`};
    width: ${props => `${props.size}px`};
`;

Badge.propTypes = {
    className: PropTypes.string,
    diameter: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
};

Badge.defaultProps = {
    className: '',
};

export default Badge;
