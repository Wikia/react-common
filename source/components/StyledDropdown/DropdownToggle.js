import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDropdownTiny from '../../icons/IconDropdownTiny';
import IconMenuControlTiny from '../../icons/IconMenuControlTiny';

export const ChevronIcon = styled(IconMenuControlTiny)`
    color: inherit;
    fill: currentColor;
    height: 12px;
    width: 12px;
`;

function getToggleIcon(iconName) {
    return iconName === 'dropdown-tiny'
        ? <ChevronIcon as={IconDropdownTiny} />
        : <ChevronIcon />;
}

function getToggleContentComponent(toggleContent, iconName) {
    const icon = getToggleIcon(iconName);

    if (typeof toggleContent === 'function') {
        return toggleContent(icon);
    }

    if (typeof toggleContent === 'string') {
        return (
            <React.Fragment>
                <span>{toggleContent}</span>
                {icon}
            </React.Fragment>
        );
    }

    return toggleContent;
}

/**
 * Basic DropdownToggle component
 */
function DropdownToggle({
    className,
    onClick,
    attrs,
    toggleContent,
    iconName,
}) {
    const Component = attrs.href ? 'a' : 'div';

    return (
        <Component className={className} onClick={onClick} {...attrs} role="button">
            {getToggleContentComponent(toggleContent, iconName)}
        </Component>
    );
}

DropdownToggle.propTypes = {
    /**
     * HTML attributes
     */
    attrs: PropTypes.shape({
        href: PropTypes.string,
    }),
    /**
     * HTML classes
     */
    className: PropTypes.string,
    /**
     *  The icon to use for the dropdown chevron
     */
    iconName: PropTypes.oneOf([
        'dropdown-tiny',
        'menu-control-tiny',
    ]).isRequired,
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
    className: '',
    attrs: {},
};

export default styled(DropdownToggle)`
    // this needs to be empty - all the styles are defined in index
`;
