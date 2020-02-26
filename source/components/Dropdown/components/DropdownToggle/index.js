import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconDropdownTiny from '../../../../icons/IconDropdownTiny';
import IconMenuControlTiny from '../../../../icons/IconMenuControlTiny';
import IconMoreSmall from '../../../../icons/IconMoreSmall';

const getToggleIcon = (iconName, isLevel2) => {
    const iconClassName = isLevel2
        ? 'wds-dropdown-chevron'
        : 'wds-dropdown__toggle-chevron';

    switch (iconName) {
        case 'dropdown-more':
            return <IconMoreSmall className="wds-icon wds-icon-small wds-dropdown__more" />;
        case 'dropdown-tiny':
            return <IconDropdownTiny className={`wds-icon wds-icon-tiny ${iconClassName}`} />;
        default:
            return <IconMenuControlTiny className={`wds-icon wds-icon-tiny ${iconClassName}`} />;
    }
};

/**
 * Basic DropdownToggle component
 */
class DropdownToggle extends React.Component {
    getToggleContentComponent() {
        const { toggleContent, iconName, isLevel2 } = this.props;
        const icon = getToggleIcon(iconName, isLevel2);
        let toggleContentComponent;

        if (typeof toggleContent === 'function') {
            toggleContentComponent = toggleContent(icon);
        } else if (typeof toggleContent === 'string') {
            toggleContentComponent = (
                <React.Fragment>
                    <span>{toggleContent}</span>
                    {icon}
                </React.Fragment>
            );
        } else {
            toggleContentComponent = toggleContent;
        }

        return toggleContentComponent;
    }

    render() {
        const {
            isLevel2,
            className,
            attrs,
            onClick,
        } = this.props;

        const fullClassName = classNames([{
            'wds-dropdown__toggle': !isLevel2,
            'wds-dropdown-level-2__toggle': isLevel2,
        }, className]);

        const toggleContentComponent = this.getToggleContentComponent();
        const Component = attrs.href ? 'a' : 'div';

        return (
            <Component onClick={onClick} className={fullClassName} {...attrs} role="button">
                {toggleContentComponent}
            </Component>
        );
    }
}

DropdownToggle.propTypes = {
    /**
     * HTML attributes
     */
    attrs: PropTypes.shape({
        href: PropTypes.string,
    }),
    /**
     * Dropdown toggle content
     */
    children: PropTypes.node,
    /**
     * HTML classes
     */
    className: PropTypes.string,

    /**
     *  The icon to use for the dropdown chevron
     */
    iconName: PropTypes.oneOf([
        'dropdown-more',
        'dropdown-tiny',
        'menu-control-tiny',
    ]).isRequired,

    /**
     * Is it a nested dropdown
     */
    isLevel2: PropTypes.bool,
    /**
     * Whether or not the dropdown is displayed on touch device
     */
    isTouchDevice: PropTypes.bool,
    /**
     * Callback when toggle is clicked
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Content of the toggle
     */
    toggleContent: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,
};

DropdownToggle.defaultProps = {
    children: null,
    isLevel2: false,
    className: '',
    attrs: {},
    isTouchDevice: false,
};

export default DropdownToggle;
