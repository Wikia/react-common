import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import uniqueId from 'lodash/uniqueId';

import IconCheckboxSmall from '../../icons/IconCheckboxSmall';
import IconCheckboxEmptySmall from '../../icons/IconCheckboxEmptySmall';

import './styles.scss';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.id = uniqueId('wds-checkbox-');
    }

    render() {
        const { children, className, isChecked, onChange } = this.props;

        return (
            <div className={classNames('wds-checkbox', className)}>
                <input type="checkbox" id={this.id} checked={isChecked} onChange={onChange} />
                <label htmlFor={this.id}>
                    {isChecked && <IconCheckboxSmall className="wds-icon wds-icon-small wds-checkbox-icon" />}
                    {!isChecked && <IconCheckboxEmptySmall className="wds-icon wds-icon-small wds-checkbox-icon" />}
                    {children}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    /** Label passed as a child */
    children: PropTypes.node,
    /** Additional class name */
    className: PropTypes.string,
    /** Is checkbox checked */
    isChecked: PropTypes.bool.isRequired,
    /** Function triggered when checkbox changes its state */
    onChange: PropTypes.func.isRequired,
};

export default Checkbox;
