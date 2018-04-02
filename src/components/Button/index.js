import React from 'react';
import PropTypes from 'prop-types';

/**
 * Basic button component
 */
const Button = ({
  className,
  squished,
  text,
  secondary,
  stretched,
  square,
  onClick,
  children,
  ...rest
}) => {
  const classes = [
    'wds-button',
    className,
    secondary ? 'wds-is-secondary' : '',
    square ? 'wds-is-square' : '',
    squished ? 'wds-is-squished' : '',
    stretched ? 'wds-is-stretched' : '',
    text ? 'wds-is-text' : '',
  ].filter(c => c).join(' ');

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  square: PropTypes.bool,
  squished: PropTypes.bool,
  stretched: PropTypes.bool,
  text: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  secondary: false,
  square: false,
  squished: false,
  stretched: false,
  text: false,
  onClick: null,
};

export default Button;
