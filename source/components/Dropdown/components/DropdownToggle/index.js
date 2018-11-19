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
    classes,
    attrs,
    shouldNotWrap
}) => {
    const className = classNames({
        'wds-dropdown__toggle': true,
        'wds-dropdown-level-2__toggle': isLevel2,
        [classes]: true,
    });

    const iconClassName = isLevel2
        ? 'wds-dropdown-chevron'
        : 'wds-dropdown__toggle-chevron';

    const toggleElement = shouldNotWrap ? children : <span>{children}</span>;

    return (
        <div className={className} {...attrs}>
            {toggleElement}
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
    /**
     * HTML classes
     */
    classes: PropTypes.string,
    /**
     * HTML attributes
     */
    attrs: PropTypes.object,
    /**
     * Is it a nested dropdown
     */
    shouldNotWrap: PropTypes.bool,
};

DropdownToggle.defaultProps = {
    children: null,
    isLevel2: false,
    classes: '',
    attrs: {},
    shouldNotWrap: false
};

export default DropdownToggle;
