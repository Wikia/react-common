import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * FandomContentWell wraps `children` in `wds-content-well($use-xxlarge-breakpoint: false)` CSS mixin.
 */
const FandomContentWell = ({className, children}) => (
  <div className={`wds-fandom-content-well ${className}`}>
    {children}
  </div>
);

FandomContentWell.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Additional class name
   */
  className: PropTypes.string,
};

FandomContentWell.defaultProps = {
  children: null,
  className: '',
};

export default FandomContentWell;
