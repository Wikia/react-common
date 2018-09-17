import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import uniqueId from 'lodash.uniqueid';

import './styles.scss';

function generateId() {
    return uniqueId('wds_input_');
}

class Input extends React.Component {
    constructor(props) {
        super(props);

        const { value } = props;
        const id = props.id || generateId();

        this.state = {
            value,
            id,
            isEmpty: value.length === 0,
            isFocused: false,
            dynamicTextareaHeight: null,
        };

        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleAutoResize = this.handleAutoResize.bind(this);
    }

    componentDidMount() {
        this.autoFocus();
    }

    componentWillReceiveProps(newProps) {
        const id = newProps.id || generateId();

        this.setState({
            value: newProps.value,
            id,
            isEmpty: newProps.value.length === 0,
        });
    }

    componentDidUpdate() {
        this.forceFocus();
    }

    getClassName() {
        const {
            disabled, readonly, status, resize, className,
        } = this.props;

        const { isEmpty, isFocused } = this.state;

        let statusClass = null;

        if (isFocused) {
            statusClass = 'is-focused';
        } else if (isEmpty) {
            statusClass = 'is-empty';
        }

        return [
            'wds-input',
            disabled ? 'is-disabled' : null,
            readonly ? 'is-readonly' : null,
            status === 'error' ? 'has-error' : null,
            typeof resize === 'boolean' && resize ? 'is-resize' : null,
            statusClass,
            className,
        ]
            .filter(Boolean)
            .join(' ');
    }

    getInputClassName() {
        const { inputClassName } = this.props;

        return ['wds-input__field', inputClassName].join(' ');
    }

    getLabelClassName() {
        const { labelClassName } = this.props;

        return ['wds-input__label', labelClassName].join(' ');
    }

    getHintClassName() {
        const { hintClassName } = this.props;

        return ['wds-input__hint', hintClassName].join(' ');
    }

    getSharedInputProps() {
        const {
            id,
            value,
        } = this.state;

        const {
            disabled,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            onPaste,
            placeholder,
            readonly,
            tabIndex,
        } = this.props;

        return {
            className: this.getInputClassName(),
            id,
            name: id,
            value,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onKeyUp,
            onKeyDown,
            onKeyPress,
            onPaste,
            readOnly: readonly,
            disabled,
            tabIndex,
            placeholder,
        };
    }

    focus() {
        if (this.input && document.activeElement !== this.input) {
            this.input.focus();
        }
    }

    blur() {
        if (this.input) {
            this.input.blur();
        }
    }

    handleChange(event) {
        const { readonly, disabled, onChange } = this.props;

        if (readonly || disabled) {
            return;
        }

        const { value } = event.target;

        this.setState({
            value,
            isEmpty: value.length === 0,
        });
        onChange(value, event);
    }

    handleFocus(event) {
        const { readonly, onFocus } = this.props;

        if (readonly) {
            return;
        }

        this.setState({
            isFocused: true,
        });
        onFocus(event);
    }

    handleBlur(event) {
        const { onBlur } = this.props;

        this.setState({
            isFocused: false,
        });
        onBlur(event);
    }

    isAutoFocus() {
        const {
            autoFocus, forceFocus, disabled, readonly,
        } = this.props;

        return (autoFocus || forceFocus) && !disabled && !readonly;
    }

    isForceFocus() {
        const { forceFocus, disabled, readonly } = this.props;

        return forceFocus && !disabled && !readonly;
    }

    isAutoResize() {
        const { resize, disabled, readonly } = this.props;

        return resize === 'auto' && !disabled && !readonly;
    }

    autoFocus() {
        if (this.isAutoFocus() && this.input) {
            this.input.focus();
        }
    }

    forceFocus() {
        if (this.isForceFocus() && this.input) {
            if (document.activeElement !== this.input) {
                this.input.focus();
            }
        }
    }

    handleAutoResize() {
        // height has to be reset first because if not it keeps increasing every time user will type a character
        // setting actual height must be done in setState callback, because React might optimize this into one setState call
        // scrollHeight includes padding but not border, we need to compensate this to avoid slight height change
        // keep value in sync with bottom-border in .wds-input__field styles
        const BOTTOM_BORDER_WIDTH = 1;

        this.setState({ dynamicTextareaHeight: 'auto' }, () => {
            this.setState({ dynamicTextareaHeight: `${this.input.scrollHeight + BOTTOM_BORDER_WIDTH}px` });
        });

        // to prevent scroll jumping
        this.input.scrollTop = this.input.scrollHeight;
    }

    renderMultiline() {
        const { rows } = this.props;

        const { dynamicTextareaHeight, value } = this.state;

        const props = {
            ...this.getSharedInputProps(),
            rows,
        };

        if (this.isAutoResize()) {
            props.onInput = this.handleAutoResize;
        }

        if (dynamicTextareaHeight) {
            props.style = { height: dynamicTextareaHeight };
        }

        return (
            <textarea
                ref={(input) => {
                    this.input = input;
                }}
                {...props}
            >
                {value}
            </textarea>
        );
    }

    renderInput() {
        const { type } = this.props;

        if (type === 'multiline') {
            return this.renderMultiline();
        }

        const props = {
            ...this.getSharedInputProps(),
            type,
        };

        return (
            <input
                ref={(input) => {
                    this.input = input;
                }}
                {...props}
            />
        );
    }

    renderLabel() {
        const { id } = this.state;
        const { label } = this.props;

        return (
            <label className={this.getLabelClassName()} htmlFor={id}>
                {label}
            </label>
        );
    }

    renderHint() {
        const { hint } = this.props;

        if (!hint) {
            return null;
        }

        return <div className={this.getHintClassName()}>{hint}</div>;
    }

    render() {
        return (
            <div className={this.getClassName()}>
                {this.renderInput()}
                {this.renderHint()}
                {this.renderLabel()}
            </div>
        );
    }
}

Input.propTypes = {
    /**
     * Additional class name for the component
     */
    autoFocus: PropTypes.bool,
    /**
     * Additional class name for the hint
     */
    className: PropTypes.string,
    /**
     * Additional class name for the input
     */
    disabled: PropTypes.bool,
    /**
     * Additional class name for the label
     */
    forceFocus: PropTypes.bool,
    /**
     * ID of the element - by default it's generated automatically
     */
    hint: PropTypes.string,
    /**
     * Type of the input.
     * Use `multiline` for multi-line input (textarea).
     */
    hintClassName: PropTypes.string,
    /**
     * Value
     */
    id: PropTypes.string,
    /**
     * Label that we want to display.
     */
    inputClassName: PropTypes.string,
    /**
     * Hint to display
     */
    label: (props, propName) => {
        // eslint-disable-next-line react/destructuring-assignment
        if (props.placeholder && props[propName]) {
            return new Error(`Prop ${propName} is not used when placeholder is set`);
        }

        // eslint-disable-next-line react/destructuring-assignment
        if (!props.placeholder && !props[propName]) {
            return new Error(`Prop ${propName} is required when placeholder is not set`);
        }

        // eslint-disable-next-line react/destructuring-assignment
        if (typeof props[propName] !== 'string') {
            return new Error(`Prop ${propName} is not a string`);
        }

        return null;
    },
    /**
     * Placeholder to display
     */
    labelClassName: PropTypes.string,
    /**
     * Status
     */
    onBlur: PropTypes.func,
    /**
     * Tab Index
     */
    onChange: PropTypes.func,
    /**
     * Initial number of rows
     *
     * **Note**: This prop only makes sense for multiline inputs.
     */
    onFocus: PropTypes.func,
    /**
     * Can the textarea be resized by the user
     * Use `auto` to adjust textarea height automatically
     *
     * **Note**: This prop only makes sense for multiline inputs.
     */
    onKeyDown: PropTypes.func,
    /**
     * Auto focus flag
     */
    onKeyPress: PropTypes.func,
    /**
     * Force focus flag
     */
    onKeyUp: PropTypes.func,
    /**
     * Disabled flag
     */
    onPaste: PropTypes.func,
    /**
     * Readonly flag
     */
    placeholder: PropTypes.string,
    /**
     * Callback for `onBlur` event
     */
    readonly: PropTypes.bool,
    /**
     * Callback for `onChange` event - will be called whenever the value chnages
     * with `callback(value, event)`.
     */
    resize: PropTypes.oneOf(['auto', true, false]),
    /**
     * Callback for `onFocus` event
     */
    rows: PropTypes.number,
    /**
     * Callback for `onKeyDown` event
     */
    status: PropTypes.oneOf(['normal', 'error']),
    /**
     * Callback for `onKeyPress` event
     */
    tabIndex: PropTypes.number,
    /**
     * Callback for `onKeyUp` event
     */
    type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),
    /**
     * Callback for `onPaste` event
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
    autoFocus: false,
    className: '',
    disabled: false,
    forceFocus: false,
    hint: null,
    hintClassName: '',
    id: null,
    inputClassName: '',
    label: '',
    labelClassName: '',
    placeholder: null,
    readonly: false,
    resize: false,
    rows: 2,
    status: 'normal',
    tabIndex: 0,
    type: 'text',
    value: '',
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onPaste: () => {},
};

export default Input;
