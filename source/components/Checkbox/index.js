import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import uniqueId from 'lodash/uniqueId';

import IconCheckboxSmall from '../../icons/IconCheckboxSmall';
import IconCheckboxEmptySmall from '../../icons/IconCheckboxEmptySmall';
import IconLockSmall from '../../icons/IconLockSmall';

import './styles.scss';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.id = uniqueId('wds-checkbox-');
    }

    render() {
        const {
            children,
            className,
            checked,
            disabled,
            onChange,
        } = this.props;

        return (
            <div className={classNames('wds-checkbox', className)}>
                <input
                    className="wds-checkbox__input"
                    type="checkbox"
                    id={this.id}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <label className="wds-checkbox__label" htmlFor={this.id}>
                    {checked && !disabled && <IconCheckboxSmall className="wds-icon wds-icon-small wds-checkbox__icon" />}
                    {!checked && !disabled && <IconCheckboxEmptySmall className="wds-icon wds-icon-small wds-checkbox__icon" />}
                    {disabled && <IconLockSmall className="wds-icon wds-icon-small wds-checkbox__lock-icon" />}
                    {children}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    /** Is checkbox checked */
    checked: PropTypes.bool,
    /** Label passed as a child */
    children: PropTypes.node,
    /** Additional class name */
    className: PropTypes.string,
    /** Is checkbox disabled */
    disabled: PropTypes.bool,
    /** Function triggered when checkbox changes its state */
    onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
    checked: false,
    children: null,
    className: undefined,
    disabled: false,
};

export default Checkbox;
