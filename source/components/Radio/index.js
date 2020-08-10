import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconRadioActiveSmall from '../../icons/IconRadioActiveSmall';
import IconRadioEmptySmall from '../../icons/IconRadioEmptySmall';
import IconLockSmall from '../../icons/IconLockSmall';

import './styles.scss';

export default function Radio({ children, className, checked, disabled, ...restProps }) {
    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={classNames('wds-radio', className)}>
            <input
                {...restProps}
                className="wds-radio__input"
                type="radio"
                checked={checked}
                disabled={disabled}
            />
            <span className="wds-radio__label">
                {checked && !disabled && <IconRadioActiveSmall className="wds-icon wds-icon-small wds-checkbox__icon" />}
                {!checked && !disabled && <IconRadioEmptySmall className="wds-icon wds-icon-small wds-checkbox__icon" />}
                {disabled && <IconLockSmall className="wds-icon wds-icon-small wds-checkbox__lock-icon" />}
                {children}
            </span>
        </label>
    );
}

Radio.propTypes = {
    /** Is radio button checked */
    checked: PropTypes.bool,
    /** Label passed as a child */
    children: PropTypes.node,
    /** Additional class name */
    className: PropTypes.string,
    /** Is radio button disabled */
    disabled: PropTypes.bool,
    /** Function triggered when checkbox changes its state */
    onChange: PropTypes.func.isRequired,
    /** Value that will be associated with radio */
    value: PropTypes.string.isRequired,
};

Radio.defaultProps = {
    checked: false,
    children: null,
    className: undefined,
    disabled: false,
};
