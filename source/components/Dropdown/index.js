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
            isTouchDevice: typeof window !== 'undefined' && ('ontouchstart' in window)
        };

        this.onClick = this.onClick.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
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
            contentScrollable
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

    onClick(e) {
        if (this.state.isTouchDevice) {
            this.setState({
                isClicked: !this.isClicked
            });
            e.preventDefault();
        }
    }

    onMouseLeave() {
        if (this.state.isTouchDevice) {
            this.setState({
                isClicked: false
            });
        }
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
    hasShadow: PropTypes.bool,
    /**
     * Hides chevron in dropdown toggle
     */
    noChevron: PropTypes.bool,
    /**
     * Whether or not dropdown should have a drop shadow (darker than the one produced by hasShadow)
     */
    hasDarkShadow: PropTypes.bool,
    /**
     * Is it a nested dropdown
     */
    isLevel2: PropTypes.bool,
    /**
     * Should dropdown content be left-aligned with the dropdown toggle
     */
    dropdownLeftAligned: PropTypes.bool,
    /**
     * Should dropdown content be right-aligned with the dropdown toggle
     */
    dropdownRightAligned: PropTypes.bool,
    /**
     * Should dropdown content be scrollable
     */
    contentScrollable: PropTypes.bool,
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
};

export default Dropdown;
