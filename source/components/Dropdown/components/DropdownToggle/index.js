import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line
import Icon from '../../../Icon';

/**
 * Basic DropdownToggle component
 */
class DropdownToggle extends React.Component {
    static getToggleContentComponent(toggleContent, isLevel2) {
        const iconClassName = isLevel2
            ? 'wds-dropdown-chevron'
            : 'wds-dropdown__toggle-chevron';
        const icon = <Icon name="menu-control-tiny" className={`wds-icon wds-icon-tiny ${iconClassName}`} />;
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
            toggleContent,
            className,
            attrs,
            onClick,
        } = this.props;

        const fullClassName = classNames([{
            'wds-dropdown__toggle': !isLevel2,
            'wds-dropdown-level-2__toggle': isLevel2,
        }, className]);

        const toggleContentComponent = DropdownToggle.getToggleContentComponent(toggleContent, isLevel2);

        if (attrs.href) {
            return (
                // TODO: Fix a11y
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <a onClick={onClick} className={fullClassName} {...attrs}>
                    {toggleContentComponent}
                </a>
            );
        }

        return (
            // TODO: Fix a11y
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div onClick={onClick} className={fullClassName} {...attrs}>
                {toggleContentComponent}
            </div>
        );
    }
}

DropdownToggle.propTypes = {
    /**
     * HTML attributes
     */
    attrs: PropTypes.shape({
        href: PropTypes.string
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
};

DropdownToggle.defaultProps = {
    children: null,
    isLevel2: false,
    className: '',
    attrs: {
        href: ''
    },
    isTouchDevice: false,
};

export default DropdownToggle;
