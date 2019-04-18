import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({ name, className, ...rest }) => {
    return (
        <svg className={className} {...rest}>
            <use xlinkHref={name} />
        </svg>
    );
};

Svg.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Svg.defaultProps = {
    name: '',
};

export default Svg
