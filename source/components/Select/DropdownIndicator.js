import React from 'react';
import { components } from 'react-select';

export const SearchDropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
        <svg
            className="search-dropdown-indicator"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
        >
            <g fillRule="evenodd">
                <path d="M16.984 16.025l-4.03-4.043a.713.713 0 0 0-1.011 0 .72.72 0 0 0 0 1.015l4.03 4.043c.279.28.732.28 1.011 0a.72.72 0 0 0 0-1.015z" />
                <path d="M2.178 7.924c0-3.17 2.56-5.74 5.72-5.74 3.16 0 5.72 2.57 5.72 5.74 0 3.17-2.56 5.739-5.72 5.739-3.16 0-5.72-2.57-5.72-5.74zm-1.43 0c0 3.962 3.2 7.174 7.15 7.174s7.15-3.212 7.15-7.174S11.848.75 7.898.75.748 3.962.748 7.924z" />
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
