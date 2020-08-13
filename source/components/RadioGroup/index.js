import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

export default function RadioGroup({ className, name, children, title, ...restProps }) {
    return (
        <fieldset {...restProps} className={classNames('wds-radio-group', className)}>
            {title && <legend className="wds-radio-group__legend">{title}</legend>}
            <div aria-label={name} role="radiogroup">
                {children}
            </div>
        </fieldset>
    );
}

RadioGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

RadioGroup.defaultProps = {
    title: undefined,
    className: undefined,
};
