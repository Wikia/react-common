import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

// eslint-disable-next-line no-restricted-imports
import IconMagnifyingGlass from '../../icons/IconMagnifyingGlass';
import IconDropdown from '../../icons/IconDropdown';

export const SearchDropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
        <IconMagnifyingGlass className="search-dropdown-indicator" />
    </components.DropdownIndicator>
);

export const DefaultDropdownIndicator = (props) => {
    const className = [
        'default-dropdown-indicator',
        props.isFocused ? 'is-focused' : undefined,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <components.DropdownIndicator {...props}>
            <IconDropdown className={className} />
        </components.DropdownIndicator>
    );
};

DefaultDropdownIndicator.propTypes = {
    isFocused: PropTypes.bool,
};

DefaultDropdownIndicator.defaultProps = {
    isFocused: false,
};
