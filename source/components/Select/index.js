import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import './styles.scss';
import IndicatorsContainer from './IndicatorsContainer';
import SelectContainer from './SelectContainer';
import { DefaultDropdownIndicator, SearchDropdownIndicator } from './DropdownIndicator';
import LoadingIndicator from './LoadingIndicator';

function callWithValues(func, values, isMulti) {
    if (!func) {
        return;
    }

    if (isMulti) {
        func(values);
        return;
    }

    if (values.length === 0) {
        func(null, null);
        return;
    }

    const { value, label } = values[0];
    func(value, label);
}

class Select extends React.Component {
    static createOption(value, label) {
        return { value, label };
    }

    constructor(props) {
        super(props);
        this.selectRef = React.createRef();
        this.onRequestNoOptionsMessage = this.onRequestNoOptionsMessage.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    onBlur() {
        if (!this.props.onBlur || !this.selectRef.current) {
            return;
        }

        callWithValues(this.props.onBlur, this.selectRef.current.select.getCommonProps().getValue(), this.props.multi);
    }

    onChange(values) {
        const valuesAsArray = this.props.multi ? values : [values];
        callWithValues(this.props.onChange, valuesAsArray, this.props.multi);
    }

    onFocus() {
        if (!this.props.onFocus) {
            return;
        }

        this.props.onFocus();
    }

    onRequestNoOptionsMessage({ inputValue }) {
        const { onNoOptions } = this.props;
        if (typeof onNoOptions === 'function') {
            return onNoOptions(inputValue);
        }

        return onNoOptions;
    }

    onTextInputChange(input) {
        if (this.props.onTextInputChange) {
            this.props.onTextInputChange(input);
        }
    }

    getRootClassName() {
        return ['fandom-select', this.props.className]
            .filter(Boolean)
            .join(' ');
    }

    getValueFromProps() {
        const { value, options } = this.props;

        if (!value) {
            return undefined;
        }

        let valuesWithLabels = value;
        if (!(value instanceof Array)) {
            valuesWithLabels = [value];
        }

        valuesWithLabels = valuesWithLabels
            .map(v => options.find(o => o.value === v))
            .filter(Boolean);

        if (valuesWithLabels.length === 0) {
            return undefined;
        }

        if (this.props.multi) {
            return valuesWithLabels;
        }

        return valuesWithLabels[0];
    }

    render() {
        return (
            <ReactSelect
                ref={this.selectRef}
                autoFocus={this.props.autoFocus}
                blurInputOnSelect
                className={this.getRootClassName()}
                classNamePrefix="fandom-select"
                controlShouldRenderValue={this.props.multi ? this.props.multiValueRender : true}
                isDisabled={this.props.disabled || this.props.loading}
                isLoading={this.props.loading}
                isMulti={this.props.multi}
                isSearchable={this.props.searchable}
                noOptionsMessage={this.onRequestNoOptionsMessage}
                placeholder={this.props.placeholder}
                onBlur={this.onBlur}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onInputChange={this.onTextInputChange}
                options={this.props.options}
                value={this.getValueFromProps()}
                components={{
                    IndicatorSeparator: null,
                    DropdownIndicator: this.props.searchable ? SearchDropdownIndicator : DefaultDropdownIndicator,
                    LoadingIndicator,
                    IndicatorsContainer,
                    SelectContainer,
                }}
            />
        );
    }
}

Select.propTypes = {
    /**
     * Focus the control when it is mounted
     */
    autoFocus: PropTypes.bool,
    /**
     * Additional class for root element
     */
    className: PropTypes.string,
    /**
     * whether or not the input is disabled
     */
    disabled: PropTypes.bool,
    /**
     * whether or not to show loading indicator
     */
    loading: PropTypes.bool,
    /**
     * whether or not multiple values are allowed
     */
    multi: PropTypes.bool,
    /**
     * whether or not the component should render values when `multi=true`
     */
    multiValueRender: PropTypes.bool,
    /**
     * called when the input is blurred `onBlur(val, label)`
     */
    onBlur: PropTypes.func,
    /**
     * called when the input is changed
     */
    onChange: PropTypes.func,
    /**
     * called when input is focused `onFocus()`
     */
    onFocus: PropTypes.func,
    /**
     * message when no options are present. If a `func`, the only argument is the input to the text input
     */
    onNoOptions: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    /**
     * fired when the search input is changed. `onTextInputChange(currentInput)`
     */
    onTextInputChange: PropTypes.func,
    /**
     * options to display. Use `createOption` exported from this module to create options
     */
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
    })),
    /**
     * Placeholder text used when no value is selected
     */
    placeholder: PropTypes.string,
    /**
     * whether or not to allow text searching
     */
    searchable: PropTypes.bool,
    /**
     * when using as controlled input, the currently selected values
     */
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.any),
        PropTypes.any,
    ]),
};

Select.defaultProps = {
    autoFocus: false,
    className: '',
    disabled: false,
    loading: false,
    multi: false,
    multiValueRender: true,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    onNoOptions: 'No Options',
    onTextInputChange: undefined,
    options: [],
    placeholder: 'Select...',
    searchable: true,
    value: undefined,
};

export default Select;
