import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

import './styles.scss';

function generateId() {
  return uniqueId('wds_input_');
}

class Input extends React.Component {
  constructor(props) {
    super(props);

    const value = props.value;
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
    let statusClass = null;

    if (this.state.isFocused) {
      statusClass = 'is-focused';
    } else if (this.state.isEmpty) {
      statusClass = 'is-empty';
    }

    return [
      'wds-input',
      this.props.disabled ? 'is-disabled' : null,
      this.props.readonly ? 'is-readonly' : null,
      this.props.status === 'error' ? 'has-error' : null,
      typeof this.props.resize === 'boolean' && this.props.resize ? 'is-resize' : null,
      statusClass,
      this.props.className,
    ].filter(Boolean).join(' ');
  }

  getInputClassName() {
    return [
      'wds-input__field',
      this.props.inputClassName,
    ].join(' ');
  }

  getLabelClassName() {
    return [
      'wds-input__label',
      this.props.labelClassName,
    ].join(' ');
  }

  getHintClassName() {
    return [
      'wds-input__hint',
      this.props.hintClassName,
    ].join(' ');
  }

  getSharedInputProps() {
    return {
      className: this.getInputClassName(),
      id: this.state.id,
      name: this.state.id,
      value: this.state.value,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyUp: this.props.onKeyUp,
      onKeyDown: this.props.onKeyDown,
      onKeyPress: this.props.onKeyPress,
      onPaste: this.props.onPaste,
      readOnly: this.props.readonly,
      disabled: this.props.disabled,
      tabIndex: this.props.tabIndex,
      placeholder: this.props.placeholder,
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
    if (this.props.readonly || this.props.disabled) {
      return;
    }

    const value = event.target.value;

    this.setState({
      value,
      isEmpty: value.length === 0,
    });
    this.props.onChange(value, event);
  }

  handleFocus(event) {
    if (this.props.readonly) {
      return;
    }

    this.setState({
      isFocused: true,
    });
    this.props.onFocus(event);
  }

  handleBlur(event) {
    this.setState({
      isFocused: false,
    });
    this.props.onBlur(event);
  }

  isAutoFocus() {
    return (this.props.autoFocus || this.props.forceFocus) && !this.props.disabled && !this.props.readonly;
  }

  isForceFocus() {
    return this.props.forceFocus && !this.props.disabled && !this.props.readonly;
  }

  isAutoResize() {
    return this.props.resize === 'auto' && !this.props.disabled && !this.props.readonly;
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

    this.setState({dynamicTextareaHeight: 'auto'}, () => {
      this.setState({dynamicTextareaHeight: `${this.input.scrollHeight + BOTTOM_BORDER_WIDTH}px`});
    });

    // to prevent scroll jumping
    this.input.scrollTop = this.input.scrollHeight;
  }

  renderMultiline() {
    const props = {
      ...this.getSharedInputProps(),
      rows: this.props.rows,
    };

    if (this.isAutoResize()) {
      props.onInput = this.handleAutoResize;
    }

    if (this.state.dynamicTextareaHeight) {
      props.style = {height: this.state.dynamicTextareaHeight};
    }

    return (
      <textarea ref={(input) => { this.input = input; }} {...props}>
        {this.state.value}
      </textarea>
    );
  }

  renderInput() {
    if (this.props.type === 'multiline') {
      return this.renderMultiline();
    }

    const props = {
      ...this.getSharedInputProps(),
      type: this.props.type,
    };

    return <input ref={(input) => { this.input = input; }} {...props} />;
  }

  renderLabel() {
    return (
      <label className={this.getLabelClassName()} htmlFor={this.state.id}>
        {this.props.label}
      </label>
    );
  }

  renderHint() {
    if (!this.props.hint) {
      return null;
    }

    return <div className={this.getHintClassName()}>{this.props.hint}</div>;
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
  className: PropTypes.string,
  /**
   * Additional class name for the hint
   */
  hintClassName: PropTypes.string,
  /**
   * Additional class name for the input
   */
  inputClassName: PropTypes.string,
  /**
   * Additional class name for the label
   */
  labelClassName: PropTypes.string,
  /**
   * ID of the element - by default it's generated automatically
   */
  id: PropTypes.string,
  /**
   * Type of the input.
   * Use `multiline` for multi-line input (textarea).
   */
  type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),
  /**
   * Value
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Label that we want to display.
   */
  label: (props, propName) => {
    if (props.placeholder && props[propName]) {
      return new Error(`Prop ${propName} is not used when placeholder is set`);
    }

    if (!props.placeholder && !props[propName]) {
      return new Error(`Prop ${propName} is required when placeholder is not set`);
    }

    if (typeof props[propName] !== 'string') {
      return new Error(`Prop ${propName} is not a string`);
    }

    return null;
  },
  /**
   * Hint to display
   */
  hint: PropTypes.string,
  /**
   * Placeholder to display
   */
  placeholder: PropTypes.string,
  /**
   * Status
   */
  status: PropTypes.oneOf(['normal', 'error']),
  /**
   * Tab Index
   */
  tabIndex: PropTypes.number,
  /**
   * Initial number of rows
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  rows: PropTypes.number,
  /**
   * Can the textarea be resized by the user
   * Use `auto` to adjust textarea height automatically
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  resize: PropTypes.oneOf(['auto', true, false]),
  /**
   * Auto focus flag
   */
  autoFocus: PropTypes.bool,
  /**
   * Force focus flag
   */
  forceFocus: PropTypes.bool,
  /**
   * Disabled flag
   */
  disabled: PropTypes.bool,
  /**
   * Readonly flag
   */
  readonly: PropTypes.bool,
  /**
   * Callback for `onBlur` event
   */
  onBlur: PropTypes.func,
  /**
   * Callback for `onChange` event - will be called whenever the value chnages
   * with `callback(value, event)`.
   */
  onChange: PropTypes.func,
  /**
   * Callback for `onFocus` event
   */
  onFocus: PropTypes.func,
  /**
   * Callback for `onKeyDown` event
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback for `onKeyPress` event
   */
  onKeyPress: PropTypes.func,
  /**
   * Callback for `onKeyUp` event
   */
  onKeyUp: PropTypes.func,
  /**
   * Callback for `onPaste` event
   */
  onPaste: PropTypes.func,
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
