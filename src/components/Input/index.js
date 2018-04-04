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
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
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
    this.autoFocus();
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
      this.props.status === 'error' ? 'has-error' : null,
      statusClass,
      this.props.className,
    ].filter(c => c).join(' ');
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
    const value = event.target.value;

    this.setState({
      value,
      isEmpty: value.length === 0,
    });
    this.props.onChange(value, event);
  }

  handleFocus(event) {
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
    return this.props.autoFocus && !this.props.disabled;
  }

  autoFocus() {
    if (this.isAutoFocus() && this.input) {
      if (document.activeElement !== this.input) {
        this.input.focus();
      }
    }
  }

  renderInput() {
    const props = {
      className: this.getInputClassName(),
      type: this.props.type,
      id: this.state.id,
      name: this.state.id,
      value: this.state.value,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyUp: this.props.onKeyUp,
      onKeyDown: this.props.onKeyDown,
      onKeyPress: this.props.onKeyPress,
      disabled: this.props.disabled,
      tabIndex: this.props.tabIndex,
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
   * Type of the input
   */
  type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password']),
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
  label: PropTypes.string.isRequired,
  /**
   * Hint to display
   */
  hint: PropTypes.string,
  /**
   * Status
   */
  status: PropTypes.oneOf(['normal', 'error']),
  /**
   * Tab Index
   */
  tabIndex: PropTypes.number,
  /**
   * Auto focus flag
   */
  autoFocus: PropTypes.bool,
  /**
   * Disabled flag
   */
  disabled: PropTypes.bool,
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
};

Input.defaultProps = {
  className: '',
  hintClassName: '',
  inputClassName: '',
  labelClassName: '',
  id: null,
  type: 'text',
  value: '',
  hint: null,
  status: 'normal',
  tabIndex: 0,
  autoFocus: false,
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
};

export default Input;
