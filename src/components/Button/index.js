import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    className,
    squished,
    text,
    secondary,
    stretched,
    square,
    disabled,
    ...rest
  } = props;

  const classes = [
    className,
    secondary ? 'wds-is-secondary' : '',
    square ? 'wds-is-square' : '',
    squished ? 'wds-is-squished' : '',
    stretched ? 'wds-is-stretched' : '',
    text ? 'wds-is-text' : '',
  ];

  return (
    <button
      className={`wds-button ${classes.join(' ')}`}
      disabled={disabled}
      {...rest}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  square: PropTypes.bool,
  squished: PropTypes.bool,
  stretched: PropTypes.bool,
  text: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  onClick: () => {},
  secondary: false,
  stretched: false,
  square: false,
  squished: false,
  text: false,
};

export default Button;
