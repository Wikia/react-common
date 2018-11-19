import React from 'react';
import { components } from 'react-select';

export const SearchDropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
        <svg
            className="search-dropdown-indicator"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <g fillRule="evenodd">
                <path d="M21.747 20.524l-4.872-4.871a.864.864 0 1 0-1.222 1.222l4.871 4.872a.864.864 0 1 0 1.223-1.223z" />
                <path d="M3.848 10.763a6.915 6.915 0 0 1 6.915-6.915 6.915 6.915 0 0 1 6.915 6.915 6.915 6.915 0 0 1-6.915 6.915 6.915 6.915 0 0 1-6.915-6.915zm-1.729 0a8.643 8.643 0 0 0 8.644 8.644 8.643 8.643 0 0 0 8.644-8.644 8.643 8.643 0 0 0-8.644-8.644 8.643 8.643 0 0 0-8.644 8.644z" />
            </g>
        </svg>
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
            <svg
                className={className}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7 8h10l-5 6z" />
            </svg>
        </components.DropdownIndicator>
    );
};
