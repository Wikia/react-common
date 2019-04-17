import React from 'react';

const Svg = ({ name, className, ...rest }) => {
    return (
        <svg className={className} {...rest}>
            <use xlinkHref={name} />
        </svg>
    );
};

export default Svg
