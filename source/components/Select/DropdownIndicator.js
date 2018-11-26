import React from 'react';
import { components } from 'react-select';

// eslint-disable-next-line no-restricted-imports
import Icon from '../Icon';

export const SearchDropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
        <Icon
            className="search-dropdown-indicator"
            name="magnifying-glass-small"
        />
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
            <Icon
                className={className}
                name="dropdown"
            />
        </components.DropdownIndicator>
    );
};
