import React from 'react';
import PropTypes from 'prop-types';

/**
 * Floating button (icons-only)
 */
const FloatingButton = ({
  className,
  href,
  children,
  ...rest
}) => {
  const classes = [
    'wds-floating-button',
    className,
  ].filter(c => c).join(' ');

  if (href) {
    return <a href={href} className={classes} {...rest}>{children}</a>;
  }

  return <button className={classes} {...rest}>{children}</button>;
};

FloatingButton.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * href attribute.
   * FloatingButton uses `<a>` tag if it's present.
   */
  href: PropTypes.string,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: PropTypes.bool,
  /**
   * Callback for the `<button>`
   */
  onClick: PropTypes.func,
};

FloatingButton.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  href: null,
  onClick: () => {},
};

export default FloatingButton;
