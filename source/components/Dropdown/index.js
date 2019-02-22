import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import getViewportSize from '../../utils/getViewportSize';

import DropdownContent from './components/DropdownContent';
import DropdownToggle from './components/DropdownToggle';

import './styles.scss';

/**
 * Basic Dropdown component
 */
class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            isFlipped: false,
            isTouchDevice: false,
        };

        this.contentElementRef = React.createRef();

        this.onClick = this.onClick.bind(this);
        this.onToggleClicked = this.onToggleClicked.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }

    componentDidMount() {
        this.setState({
            isTouchDevice: typeof window !== 'undefined' && ('ontouchstart' in window),
        });
    }

    onClick() {
        this.handleClick(false);
    }

    onToggleClicked(event) {
        this.handleClick(true, event);
    }

    onMouseLeave() {
        const { canFlip } = this.props;
        const { isTouchDevice } = this.state;

        if (isTouchDevice) {
            this.setState({
                isClicked: false,
            });
        }

        if (canFlip && !this.isLevel2) {
            this.setState({
                isFlipped: false,
            });
        }
    }

    onMouseEnter() {
        const { canFlip, isLevel2 } = this.props;
        const contentElement = this.contentElementRef.current;

        if (canFlip && !isLevel2 && contentElement) {
            const contentElementBoundingRect = contentElement.getBoundingClientRect();
            const isFlipped = contentElementBoundingRect.bottom > getViewportSize().height;

            this.setState({
                isFlipped,
            });
        }
    }

    handleClick(shouldPreventDefault, event) {
        const { isTouchDevice, isClicked } = this.state;
        const { onClose } = this.props;

        if (isTouchDevice) {
            this.setState({
                isClicked: !isClicked,
            });

            if (shouldPreventDefault) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (isClicked === true && typeof onClose === 'function') {
                onClose();
            }
        }
    }

    render() {
        const {
            children,
            toggle,
            dropdownLeftAligned,
            dropdownRightAligned,
            isLevel2,
            hasShadow,
            noChevron,
            hasDarkShadow,
            isActive,
            contentScrollable,
            toggleAttrs,
            isStickedToParent,
            toggleClassName,
            iconName,
        } = this.props;

        const {
            isClicked,
            isFlipped,
            isTouchDevice,
        } = this.state;

        const className = classNames({
            'wds-dropdown': !isLevel2,
            'wds-is-active': isClicked || isActive,
            'wds-has-shadow': hasShadow,
            'wds-no-chevron': noChevron,
            'wds-has-dark-shadow': hasDarkShadow,
            'wds-dropdown-level-2': isLevel2,
            'wds-is-touch-device': isTouchDevice,
            'wds-is-sticked-to-parent': isStickedToParent,
            'wds-is-flipped': isFlipped,
        });

        const dropdownBody = (
            <React.Fragment>
                <DropdownToggle
                    isLevel2={isLevel2}
                    attrs={toggleAttrs}
                    className={toggleClassName}
                    isTouchDevice={isTouchDevice}
                    toggleContent={toggle}
                    onClick={this.onToggleClicked}
                    iconName={iconName}
                />
                <DropdownContent
                    dropdownLeftAligned={dropdownLeftAligned}
                    dropdownRightAligned={dropdownRightAligned}
                    elementRef={this.contentElementRef}
                    isLevel2={isLevel2}
                    scrollable={contentScrollable}
                >
                    {children}
                </DropdownContent>
            </React.Fragment>
        );

        const Component = isLevel2 ? 'li' : 'div';

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <Component
                className={className}
                onClick={this.onClick}
                onMouseLeave={this.onMouseLeave}
                onMouseEnter={this.onMouseEnter}
            >
                {dropdownBody}
            </Component>
        );
    }
}

Dropdown.propTypes = {
    /**
     * Whether or nor not dropdown should automatically flip when it's near the bottom of the viewport
     */
    canFlip: PropTypes.bool,
    /**
     * React Component to display as the Dropdown Content
     */
    children: PropTypes.node,

    /**
     * Should dropdown content be scrollable
     */
    contentScrollable: PropTypes.bool,

    /**
     * Should dropdown content be left-aligned with the dropdown toggle
     */
    dropdownLeftAligned: PropTypes.bool,

    /**
     * Should dropdown content be right-aligned with the dropdown toggle
     */
    dropdownRightAligned: PropTypes.bool,

    /**
     * Whether or not dropdown should have a drop shadow (darker than the one produced by hasShadow)
     */
    hasDarkShadow: PropTypes.bool,

    /**
     * Whether or not dropdown should have a slight drop shadow
     */
    hasShadow: PropTypes.bool,

    /**
     *  The icon to use for the dropdown chevron
     */
    iconName: PropTypes.oneOf([
        'dropdown-tiny',
        'menu-control-tiny',
    ]),

    /**
     * is active
     */
    isActive: PropTypes.bool,

    /**
     * Is it a nested dropdown
     */
    isLevel2: PropTypes.bool,

    /**
     * if the top of nested dropdown content should be positioned at the same height as toggle
     */
    isStickedToParent: PropTypes.bool,

    /**
     * Should chevron on the top of dropdown content be hidden
     */
    noChevron: PropTypes.bool,

    /**
     * HTML classes to add to toggle
     */
    onClose: PropTypes.func,

    /**
     * React Component to display as a dropdown toggle
     */
    toggle: PropTypes.node.isRequired,

    /**
     * HTML attributes to add to toggle
     */
    toggleAttrs: PropTypes.shape({
        href: PropTypes.string,
    }),

    /**
     * HTML classes to add to toggle
     */
    toggleClassName: PropTypes.string,
};

Dropdown.defaultProps = {
    canFlip: false,
    children: null,
    hasShadow: false,
    noChevron: false,
    hasDarkShadow: false,
    dropdownLeftAligned: false,
    dropdownRightAligned: false,
    contentScrollable: false,
    isLevel2: false,
    isActive: false,
    toggleClassName: '',
    toggleAttrs: {},
    isStickedToParent: false,
    onClose: null,
    iconName: 'menu-control-tiny',
};

export default Dropdown;
