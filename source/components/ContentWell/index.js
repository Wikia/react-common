import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * ContentWell wraps `children` in `wds-content-well` CSS mixin.
 */
const ContentWell = ({ className, children }) => (
    <div className={`wds-content-well ${className}`}>
        {children}
    </div>
);

ContentWell.propTypes = {
    /**
   * @ignore
   */
    children: PropTypes.node,
    /**
   * Additional class name
   */
    className: PropTypes.string,
};

ContentWell.defaultProps = {
    children: null,
    className: '',
};

export default ContentWell;
