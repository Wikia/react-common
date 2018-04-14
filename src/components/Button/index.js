import React from 'react';
import PropTypes from 'prop-types';

/**
 * Basic button component
 */
const Button = ({
  className,
  text,
  secondary,
  square,
  children,
  ...rest
}) => {
  const classes = [
    'wds-button',
    className,
    secondary ? 'wds-is-secondary' : '',
    square ? 'wds-is-square' : '',
    text ? 'wds-is-text' : '',
  ].filter(c => c).join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: PropTypes.bool,
  /**
   * Secondary flag
   */
  secondary: PropTypes.bool,
  /**
   * Square flag
   */
  square: PropTypes.bool,
  /**
   * Text flag
   */
  text: PropTypes.bool,
  /**
   * Callback for the `<button>`
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  secondary: false,
  square: false,
  text: false,
  onClick: () => {},
};

export default Button;
