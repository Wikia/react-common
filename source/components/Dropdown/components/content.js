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
    isLevel2
}) => {
    const className = classNames({
        'wds-dropdown__content': true,
        'wds-is-left-aligned': dropdownLeftAligned,
        'wds-is-right-aligned': dropdownRightAligned,
        'wds-is-not-scrollable': !scrollable,
        ':wds-dropdown-level-2__content': isLevel2
    });

    return (
        <div href={href} className={className} {...rest}>
            {children}
        </div>
    );

};

DropdownContent.propTypes = {
    children: PropTypes.node,
    dropdownLeftAligned: PropTypes.bool,
    dropdownRightAligned: PropTypes.bool,
    scrollable: PropTypes.bool,
    isLevel2: PropTypes.bool,
};

DropdownContent.defaultProps = {
    children: null,
    dropdownLeftAligned: false,
    dropdownRightAligned: false,
    scrollable: true,
    isLevel2: false,
};

export default DropdownContent;
