import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line
import Icon from '../../../Icon';

/**
 * Basic DropdownToggle component
 */
const DropdownToggle = ({
    isLevel2,
    children,
}) => {
    const className = classNames({
        'wds-dropdown__toggle': true,
        'wds-dropdown-level-2__toggle': isLevel2,
    });

    const iconClassName = isLevel2
        ? 'wds-dropdown-chevron'
        : 'wds-dropdown__toggle-chevron';

    return (
        <div className={className}>
            <span>{children}</span>
            <Icon name="menu-control-tiny" className={`wds-icon wds-icon-tiny ${iconClassName}`} />
        </div>
    );
};

DropdownToggle.propTypes = {
    /**
     * Dropdown toggle content
     */
    children: PropTypes.node,
    /**
     * Is it a nested dropdown
     */
    isLevel2: PropTypes.bool,
};

DropdownToggle.defaultProps = {
    children: null,
    isLevel2: false,
};

export default DropdownToggle;
