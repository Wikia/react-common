import React from 'react';
import { components } from 'react-select';

const IndicatorsContainer = (props) => {
    const { isLoading } = props.selectProps;
    // eslint-disable-next-line no-unused-vars
    const [clearIndicator, spinner, indicatorSeparator, dropdownIndicator] = props.children;

    return (
        <components.IndicatorsContainer {...props}>
            {spinner}
            {isLoading ? null : dropdownIndicator}
            {indicatorSeparator}
        </components.IndicatorsContainer>
    );
};

export default IndicatorsContainer;
