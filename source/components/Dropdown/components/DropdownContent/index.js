import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Basic DropdownContent component
 */
const DropdownContent = ({
    children,
    dropdownLeftAligned,
    dropdownRightAligned,
    scrollable,
    isLevel2,
}) => {
    const className = classNames({
        'wds-dropdown__content': true,
        'wds-is-left-aligned': dropdownLeftAligned,
        'wds-is-right-aligned': dropdownRightAligned,
        'wds-is-not-scrollable': !scrollable,
        'wds-dropdown-level-2__content': isLevel2,
    });

    return (
        <div className={className}>
            {children}
        </div>
    );
};

DropdownContent.propTypes = {
    /**
     * React Component to display as content
     */
    children: PropTypes.node,
    /**
     * Should content be left-aligned with the dropdown toggle
     */
    dropdownLeftAligned: PropTypes.bool,
    /**
     * Should content be right-aligned with the dropdown toggle
     */
    dropdownRightAligned: PropTypes.bool,
    /**
     * Should content be scrollable
     */
    isLevel2: PropTypes.bool,
    /**
     * Is it a nested dropdown
     */
    scrollable: PropTypes.bool,
};

DropdownContent.defaultProps = {
    children: null,
    dropdownLeftAligned: false,
    dropdownRightAligned: false,
    scrollable: true,
    isLevel2: false,
};

export default DropdownContent;
