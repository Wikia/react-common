import React from 'react';
import { components } from 'react-select';

const IndicatorsContainer = (props) => {
    const { isLoading } = props.selectProps;
    const [clearIndicator, spinner, indicatorSeparator, dropdownIndicator] = props.children;

    return (
        <components.IndicatorsContainer {...props}>
            {spinner}
            {isLoading ? null : dropdownIndicator}
            {indicatorSeparator}
            {clearIndicator}
        </components.IndicatorsContainer>
    );
};

export default IndicatorsContainer;
