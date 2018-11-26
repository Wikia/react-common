import React from 'react';
import { components } from 'react-select';

const SelectContainer = props => (
    <div className={`${props.selectProps.classNamePrefix}__wrapper`}>
        <components.SelectContainer {...props} />
    </div>
);

export default SelectContainer;
