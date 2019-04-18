import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ name, className, ...rest }) => (
    <svg className={className} {...rest}>
        <use xlinkHref={name} />
    </svg>
);

Svg.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
};

Svg.defaultProps = {
    className: '',
};

export default Svg;
