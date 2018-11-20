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
    shouldNotWrap,
    iconName,
}) => {
    let className = classNames({
        'wds-dropdown__toggle': !isLevel2,
        'wds-dropdown-level-2__toggle': isLevel2,
    });

    if (classes) {
        className += ` ${classes}`;
    }

    const iconClassName = isLevel2
        ? 'wds-dropdown-chevron'
        : 'wds-dropdown__toggle-chevron';

    const toggleElement = shouldNotWrap ? children : <span>{children}</span>;

    const dropdownToggleBody = (
        <React.Fragment>
            {toggleElement}
            <Icon name={iconName} className={`wds-icon wds-icon-tiny ${iconClassName}`} />
        </React.Fragment>
    );

    if (isLevel2) {
        return (
            <a className={className} {...attrs}>
                {dropdownToggleBody}
            </a>
        );
    }

    return (
        <div className={className} {...attrs}>
            {dropdownToggleBody}
        </div>
    );
};

DropdownToggle.propTypes = {
    /**
     * HTML attributes
     */
    // eslint-disable-next-line react/forbid-prop-types
    attrs: PropTypes.object,
    /**
     * Dropdown toggle content
     */
    children: PropTypes.node,
    /**
     * HTML classes
     */
    classes: PropTypes.string,
    /**
     * Name of the icon displayed next to the toggle
     */
    iconName: PropTypes.string,
    /**
     * Is it a nested dropdown
     */
    isLevel2: PropTypes.bool,
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
    shouldNotWrap: false,
    iconName: 'menu-control-tiny',
};

export default DropdownToggle;
