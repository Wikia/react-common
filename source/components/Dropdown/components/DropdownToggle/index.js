import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line
import Icon from '../../../Icon';

/**
 * Basic DropdownToggle component
 */
class DropdownToggle extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const {
            isLevel2,
            toggleContent,
            className,
            attrs,
        } = this.props;

        let fullClassName = classNames([{
            'wds-dropdown__toggle': !isLevel2,
            'wds-dropdown-level-2__toggle': isLevel2,
        }, className]);

        const toggleContentComponent = DropdownToggle.getToggleContentComponent(toggleContent, isLevel2);

        if (attrs.href) {
            return (
                <a onClick={this.onClick} className={fullClassName} {...attrs}>
                    {toggleContentComponent}
                </a>
            );
        }

        return (
            <div className={fullClassName} {...attrs}>
                {toggleContentComponent}
            </div>
        );
    }

    static getToggleContentComponent(toggleContent, isLevel2) {
        const iconClassName = isLevel2
            ? 'wds-dropdown-chevron'
            : 'wds-dropdown__toggle-chevron';
        const icon = <Icon name='menu-control-tiny' className={`wds-icon wds-icon-tiny ${iconClassName}`}/>;

        if (typeof toggleContent === 'function') {
            return toggleContent(icon);
        } else if (typeof toggleContent === 'string') {
            return (
                <React.Fragment>
                    <span>{toggleContent}</span>
                    {icon}
                </React.Fragment>
            );
        }

        return toggleContent;
    }

    onClick(e) {
        if (this.props.isTouchDevice) {
            e.preventDefault();
        }
    }
}

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
    className: PropTypes.string,
    /**
     * Is it a nested dropdown
     */
    isLevel2: PropTypes.bool,
    /**
     * Whether or not the dropdown is displayed on touch device
     */
    isTouchDevice: PropTypes.bool
};

DropdownToggle.defaultProps = {
    children: null,
    isLevel2: false,
    classes: '',
    attrs: {},
    shouldNotWrap: false,
    isTouchDevice: false
};

export default DropdownToggle;
