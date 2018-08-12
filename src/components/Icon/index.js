import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component.
 */
const Icon = ({name, className, ...props}) => {
  const classes = [
    'wds-icon',
    className,
    /-small$/.test(name) ? 'wds-icon-small' : '',
    /-tiny$/.test(name) ? 'wds-icon-tiny' : '',
  ].filter(c => c).join(' ');

  return (
    <svg className={classes} {...props}>
      <use xlinkHref={`#wds-icons-${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  /**
   * Icon name
   */
  name: PropTypes.string.isRequired,
  /**
   * Additional class name
   */
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;

