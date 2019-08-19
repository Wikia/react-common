import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StyledList from '../StyledList';

import getViewportSize from '../../utils/getViewportSize';
import isTouchDevice from '../../utils/isTouchDevice';
import { borderRadius, colorWithAlpha, isRightAligned, scrollableList } from '../../utils/css';

import DropdownContent from './DropdownContent';
import DropdownToggle, { ChevronIcon } from './DropdownToggle';

import {
    BORDER_WIDTH,
    DROPDOWN_PADDING,
    DROPDOWN_HEIGHT,
    LIST_VERTICAL_PADDING,
    Z_INDEX,
} from './consts';


const DropdownComponent = styled.div`
    display: inline-block;
    position: relative;

    ${DropdownToggle} {
        cursor: default;
        position: relative;
    }

    ${DropdownContent} {
        background-color: ${({ theme }) => theme.color.white};
        border: ${BORDER_WIDTH}px solid ${({ theme }) => theme.color.faint_gray};
        display: none;
        left: 50%;
        /* it's for long dropdowns toggles, to make sure dropdown content is always below the nodge */
        min-width: 70%;
        /* we assume that there will be regular size .wds-list inside the dropdown content */
        padding: ${DROPDOWN_PADDING - LIST_VERTICAL_PADDING}px 0;
        position: absolute;
        top: 25px;
        transform: translateX(-50%);
        z-index: ${Z_INDEX};

        ${borderRadius()}

        .dropdown-right-aligned > & {
            ${isRightAligned()}
        }

        .dropdown-left-aligned > & {
            left: 0;
            transform: none;
        }

        .has-shadow > & {
            border: 0;
            box-shadow: 0 0 10px ${({ theme }) => colorWithAlpha(theme.color.black, 0.2)};
        }

        .has-dark-shadow > & {
            border: 0;
            box-shadow: 0 0 10px ${({ theme }) => colorWithAlpha(theme.color.black, 0.3)};
        }

        .scrollable-list > & {
            ${StyledList} {
                ${scrollableList(`${DROPDOWN_HEIGHT}px`)}
            }
        }

        :not(.scrollable-list) > a {
            ${StyledList} {
                position: relative;
            }
        }
    }

    &::before, &::after {
        bottom: -7px;
        content: '';
        display: none;
        height: 0;
        left: 50%;
        pointer-events: none;
        position: absolute;
        width: 0;
        z-index: ${Z_INDEX + 1};
    }

    &::after {
        border: 8px solid transparent;
        border-bottom-color: ${({ theme }) => theme.color.white};
        margin-left: -8px;
    }

    &::before {
        border: 9px solid transparent;
        border-bottom-color: ${({ theme }) => theme.color.faint_gray};
        margin-left: -9px;
    }

    &.is-active,
    &:not(.is-touch-device):not(.is-not-hoverable):hover {
        &:not(.no-chevron) {
            &::before, &::after {
                display: block;
            }
        }

        & > ${DropdownContent} {
            display: inline-block;
        }

        & > ${DropdownToggle} > ${ChevronIcon} {
            transform: rotate(180deg);
        }

        &.has-shadow, &.has-dark-shadow {
            &::before {
                display: none;
            }
        }
    }

    &.is-flipped {
        &::before, &::after {
            bottom: unset;
            top: -${BORDER_WIDTH}px;
        }

        &::before {
            border-bottom-color: transparent;
            border-top-color: ${({ theme }) => theme.color.faint_gray};
        }

        &::after {
            border-bottom-color: transparent;
            border-top-color: ${({ theme }) => theme.color.white};
        }

        ${DropdownContent} {
            bottom: 100%;
            top: unset;
        }
    }

    &.is-level-2 {
        margin-right: 0;

        > a {
            padding-right: ${DROPDOWN_PADDING}px
            display: flex;
            justify-content: space-between;
        }

        &.is-active > ${DropdownToggle} > ${ChevronIcon} {
            transform: rotate(-90deg);
            margin-left: 18px;
        }

        &.is-sticked-to-parent {
            position: relative;

            &.is-level-2 ${DropdownContent} {
                top: auto;
                bottom: -${DROPDOWN_PADDING - LIST_VERTICAL_PADDING + BORDER_WIDTH}px;
            }
        }

        .is-level-2 ${DropdownContent} {
            background-color: ${({ theme }) => theme.color.white};
            border: ${BORDER_WIDTH}px solid ${({ theme }) => theme.color.faint_gray};
            display: none;
            left: 100%;
            padding: ${DROPDOWN_PADDING - LIST_VERTICAL_PADDING}px 0;
            position: absolute;
            top: -${DROPDOWN_PADDING - LIST_VERTICAL_PADDING + BORDER_WIDTH}px;

            ${borderRadius()}

            .wds-list.wds-is-linked > li > a {
                font-size: ${({ theme }) => theme.font_size.xxs};
            }
        }

        &.is-active,
        &:not(.is-touch-device):hover {
            .is-level-2 ${DropdownContent} {
                display: block;
            }
        }
    }
`;

function StyledDropdown({
    canFlip,
    children,
    className,
    contentClassName,
    contentScrollable,
    dropdownLeftAligned,
    dropdownRightAligned,
    hasDarkShadow,
    hasShadow,
    iconName,
    isActive,
    isLevel2,
    isNotHoverable,
    isStickedToParent,
    noChevron,
    toggle,
    toggleAttrs,
    toggleClassName,
    onClose,
    onMouseEnter,
}) {
    const [isClicked, setClicked] = useState(false);
    const [isFlipped, setFlipped] = useState(false);

    const contentElementRef = useRef(null);

    const handleClick = /* istanbul ignore next */ (shouldPreventDefault, event) => {
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

    const onClickHandler = /* istanbul ignore next */ () => handleClick(false);

    const onToggleClickedHandler = /* istanbul ignore next */ event => handleClick(true, event);

    const onMouseLeaveHandler = /* istanbul ignore next */ () => {
        if (isTouchDevice()) {
            setClicked(false);
        }

        if (canFlip && !isLevel2) {
            setFlipped(false);
        }
    };

    const onMouseEnterHandler = /* istanbul ignore next */ (event) => {
        const contentElement = contentElementRef.current;

        if (canFlip && !isLevel2 && contentElement) {
            const contentElementBoundingRect = contentElement.getBoundingClientRect();
            const shouldFlip = contentElementBoundingRect.bottom > getViewportSize().height;

            setFlipped(shouldFlip);
        }

        if (onMouseEnter) {
            onMouseEnter(event);
        }
    };

    const allClassNames = classNames({
        'is-active': isClicked || isActive,
        'has-shadow': hasShadow,
        'no-chevron': noChevron,
        'has-dark-shadow': hasDarkShadow,
        'is-level-2': isLevel2,
        'is-touch-device': isTouchDevice(),
        'is-sticked-to-parent': isStickedToParent,
        'is-not-hoverable': isNotHoverable,
        'dropdown-left-aligned': dropdownLeftAligned,
        'dropdown-right-aligned': dropdownRightAligned,
        'content-scrollable': contentScrollable,
        'is-flipped': isFlipped,
    }, className);

    return (
        <DropdownComponent
            as={isLevel2 ? 'li' : 'div'}
            className={allClassNames}
            onClick={onClickHandler}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            <DropdownToggle
                attrs={toggleAttrs}
                className={toggleClassName}
                iconName={iconName}
                isLevel2={isLevel2}
                isTouchDevice={isTouchDevice()}
                onClick={onToggleClickedHandler}
                toggleContent={toggle}
            />
            <DropdownContent
                className={contentClassName}
                elementRef={contentElementRef}
            >
                {children}
            </DropdownContent>
        </DropdownComponent>
    );
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
