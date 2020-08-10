import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function RadioGroup({ name, children, title, ...restProps }) {
    return (
        <fieldset {...restProps} className="wds-radio-group">
            {title && <legend className="wds-radio-group__legend">{title}</legend>}
            <div aria-label={name} role="radiogroup">
                {children}
            </div>
        </fieldset>
    );
}

RadioGroup.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
};

RadioGroup.defaultProps = {
    title: undefined,
};
