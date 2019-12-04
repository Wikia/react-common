import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-extraneous-dependencies
import uniqueId from 'lodash/uniqueId';

import './styles.scss';

function generateId() {
    return uniqueId('wds_input_');
}

export default class Input extends React.Component {
    static propTypes = {
        /** Auto focus flag */
        autoFocus: PropTypes.bool,
        /** Additional class name for the component */
        className: PropTypes.string,
        /** Disabled flag */
        disabled: PropTypes.bool,
        /** Force focus flag */
        forceFocus: PropTypes.bool,
        /** Hint to display */
        hint: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node,
        ]),
        /** Additional class name for the hint  */
        hintClassName: PropTypes.string,
        /** ID of the element - by default it's generated automatically */
        id: PropTypes.string,
        /** Additional class name for the input */
        inputClassName: PropTypes.string,
        /** Label that we want to display. */
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
        /** Additional class name for the label */
        labelClassName: PropTypes.string,
        maxLength: PropTypes.number,
        /** Callback for `onBlur` event */
        onBlur: PropTypes.func,
        /**
         * Callback for `onChange` event - will be called whenever the value chnages
         * with `callback(value, event)`.
         */
        onChange: PropTypes.func,
        /** called for `onClick` event */
        onClick: PropTypes.func,
        /** Callback for `onFocus` event */
        onFocus: PropTypes.func,
        /** Callback for `onKeyDown` event */
        onKeyDown: PropTypes.func,
        /** Callback for `onKeyPress` event */
        onKeyPress: PropTypes.func,
        /** Callback for `onKeyUp` event */
        onKeyUp: PropTypes.func,
        /** Callback for `onPaste` event */
        onPaste: PropTypes.func,
        /** Placeholder to display */
        placeholder: PropTypes.string,
        /** Readonly flag */
        readonly: PropTypes.bool,
        /**
         * Can the textarea be resized by the user
         * Use `auto` to adjust textarea height automatically
         *
         * **Note**: This prop only makes sense for multiline inputs.
         */
        resize: PropTypes.oneOf(['auto', true, false]),
        /**
         * Initial number of rows
         *
         * **Note**: This prop only makes sense for multiline inputs.
         */
        rows: PropTypes.number,
        /** Status */
        status: PropTypes.oneOf(['normal', 'error']),
        /** Tab Index */
        tabIndex: PropTypes.number,
        /**
         * Type of the input.
         * Use `multiline` for multi-line input (textarea).
         */
        type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),
        /** Value */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }

    static defaultProps = {
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
        maxLength: undefined,
        placeholder: null,
        readonly: false,
        resize: false,
        rows: 2,
        status: 'normal',
        tabIndex: 0,
        type: 'text',
        value: '',
        onChange: () => {},
        onClick: () => {},
        onBlur: () => {},
        onFocus: () => {},
        onKeyDown: () => {},
        onKeyPress: () => {},
        onKeyUp: () => {},
        onPaste: () => {},
    }

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
    }

    componentDidMount() {
        this.autoFocus();
        if (this.isAutoResize()) {
            this.handleAutoResize();
        }
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
            disabled,
            readonly,
            status,
            resize,
            className,
            hint,
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
            hint ? 'has-hint' : null,
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
            maxLength,
        } = this.props;

        return {
            className: this.getInputClassName(),
            id,
            name: id,
            value,
            onChange: this.handleChange,
            onClick: this.handleClick,
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
            maxLength,
        };
    }

    handleChange = (event) => {
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

    handleClick = (event) => {
        const { readonly, disabled, onClick } = this.props;

        if (readonly || disabled) {
            return;
        }

        onClick(event);
    }

    handleFocus = (event) => {
        const { readonly, onFocus } = this.props;

        if (readonly) {
            return;
        }

        this.setState({
            isFocused: true,
        });
        onFocus(event);
    }

    handleBlur = (event) => {
        const { onBlur } = this.props;

        this.setState({
            isFocused: false,
        });
        onBlur(event);
    }

    handleAutoResize = () => {
        this.doAutoResize();
    }

    doAutoResize() {
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
        const { resize } = this.props;

        return resize === 'auto';
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
