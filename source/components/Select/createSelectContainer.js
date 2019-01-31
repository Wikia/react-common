import React from 'react';
import { components } from 'react-select';

function createSelectContainer(classNamePrefix, customClassName) {
    const className = [`${classNamePrefix}__wrapper`, customClassName]
        .filter(Boolean)
        .join(' ');

    return props => (
        <div className={className}>
            <components.SelectContainer {...props} />
        </div>
    );
}

export default createSelectContainer;
