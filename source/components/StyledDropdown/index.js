import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import isTouchDevice from '../../utils/isTouchDevice';
import getViewportSize from '../../utils/getViewportSize';

function StyledDropdown({
    canFlip,
    isLevel2,
    onClose,
    onMouseEnter,
}) {
    const [isClicked, setClicked] = useState(false);
    const [isFlipped, setFlipped] = useState(false);

    const contentElementRef = useRef(null);

    const handleClick = (shouldPreventDefault, event) => {
        if (isTouchDevice()) {
            setClicked(!isClicked);

            if (shouldPreventDefault) {
                event.preventDefault();
                event.stopPropagation();
            }

            if (isClicked === true && typeof onClose === 'function') {
                onClose();
            }
        }
    };

    const onClickHandler = () => handleClick(false);

    const onToggleClickedHandler = event => handleClick(true, event);

    const onMouseLeaveHandler = () => {
        if (isTouchDevice()) {
            setClicked(false);
        }

        if (canFlip && !isLevel2) {
            setFlipped(false);
        }
    };

    const onMouseEnterHandler = (event) => {
        const contentElement = this.contentElementRef.current;

        if (canFlip && !isLevel2 && contentElement) {
            const contentElementBoundingRect = contentElement.getBoundingClientRect();
            const shouldFlip = contentElementBoundingRect.bottom > getViewportSize().height;

            setFlipped(shouldFlip);
        }

        if (onMouseEnter) {
            onMouseEnter(event);
        }
    };
}

StyledDropdown.propTypes = {
    /**
     * Whether or nor not dropdown should automatically flip when it's near the bottom of the viewport
     */
    canFlip: PropTypes.bool,

    /**
     * React Component to display as the Dropdown Content
     */
    children: PropTypes.node,

    /**
     * Additional class name
     */
    className: PropTypes.string,

    /**
     * HTML classes to add to content element
     */
    contentClassName: PropTypes.string,

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
     * If dropdown should not be hoverable
     */
    isNotHoverable: PropTypes.bool,

    /**
     * if the top of nested dropdown content should be positioned at the same height as toggle
     */
    isStickedToParent: PropTypes.bool,

    /**
     * Should chevron on the top of dropdown content be hidden
     */
    noChevron: PropTypes.bool,

    /**
     * Function to call when dropdown will be closed
     */
    onClose: PropTypes.func,

    /**
     * Function to call when dropdown will be hovered
     */
    onMouseEnter: PropTypes.func,

    /**
     * React Component to display as a dropdown toggle
     */
    toggle: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.node,
    ]).isRequired,

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

StyledDropdown.defaultProps = {
    canFlip: false,
    children: null,
    className: '',
    contentClassName: '',
    contentScrollable: false,
    dropdownLeftAligned: false,
    dropdownRightAligned: false,
    hasDarkShadow: false,
    hasShadow: false,
    iconName: 'menu-control-tiny',
    isLevel2: false,
    isActive: false,
    isNotHoverable: false,
    isStickedToParent: false,
    noChevron: false,
    onClose: null,
    onMouseEnter: null,
    toggleClassName: '',
    toggleAttrs: {},
};

export default StyledDropdown;
