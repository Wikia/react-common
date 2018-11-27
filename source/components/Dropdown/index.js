import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
            isTouchDevice: typeof window !== 'undefined' && ('ontouchstart' in window),
        };

        this.onClick = this.onClick.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onClick(e) {
        const { isTouchDevice } = this.state;

        if (isTouchDevice) {
            this.setState({
                isClicked: !this.isClicked,
            });
            e.preventDefault();
        }
    }

    onMouseLeave() {
        const { isTouchDevice } = this.state;

        if (isTouchDevice) {
            this.setState({
                isClicked: false,
            });
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
        } = this.props;

        const {
            isClicked,
            isTouchDevice,
        } = this.state;

        const className = classNames({
            'wds-dropdown': true,
            'wds-is-active': isClicked || isActive,
            'wds-has-shadow': hasShadow,
            'wds-no-chevron': noChevron,
            'wds-has-dark-shadow': hasDarkShadow,
            'wds-dropdown-level-2': isLevel2,
            'wds-is-touch-device': isTouchDevice,
        });

        return (
            // TODO: Fix a11y
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
                className={className}
                onClick={this.onClick}
                onMouseLeave={this.onMouseLeave}
            >
                <DropdownToggle
                    isLevel2={isLevel2}
                >
                    {toggle}
                </DropdownToggle>
                <DropdownContent
                    dropdownLeftAligned={dropdownLeftAligned}
                    dropdownRightAligned={dropdownRightAligned}
                    isLevel2={isLevel2}
                    scrollable={contentScrollable}
                >
                    {children}
                </DropdownContent>
            </div>
        );
    }
}

Dropdown.propTypes = {
    /**
     * React Component to display as the Dropdown Content
     */
    children: PropTypes.node,
    /**
     * Whether or not dropdown should have a slight drop shadow
     */
    contentScrollable: PropTypes.bool,
    /**
     * Hides chevron in dropdown toggle
     */
    dropdownLeftAligned: PropTypes.bool,
    /**
     * Whether or not dropdown should have a drop shadow (darker than the one produced by hasShadow)
     */
    dropdownRightAligned: PropTypes.bool,
    /**
     * Is it a nested dropdown
     */
    hasDarkShadow: PropTypes.bool,
    /**
     * Should dropdown content be left-aligned with the dropdown toggle
     */
    hasShadow: PropTypes.bool,
    /**
     * is active
     */
    isActive: PropTypes.bool,
    /**
     * Should dropdown content be right-aligned with the dropdown toggle
     */
    isLevel2: PropTypes.bool,
    /**
     * Should dropdown content be scrollable
     */
    noChevron: PropTypes.bool,
    /**
     * React Component to display as a dropdown toggle
     */
    toggle: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
    children: null,
    hasShadow: false,
    noChevron: false,
    hasDarkShadow: false,
    dropdownLeftAligned: false,
    dropdownRightAligned: false,
    contentScrollable: false,
    isLevel2: false,
    isActive: false,
};

export default Dropdown;