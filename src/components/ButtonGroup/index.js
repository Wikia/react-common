import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

/**
 * Button group component
 */
const ButtonGroup = ({
  className,
  children,
  ...rest
}) => {
  const classes = [
    'wds-button-group',
    className,
  ].filter(c => c).join(' ');

  return <div className={classes} {...rest}>{children}</div>;
};

ButtonGroup.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Additional class name
   */
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  children: null,
  className: '',
};

export default ButtonGroup;
