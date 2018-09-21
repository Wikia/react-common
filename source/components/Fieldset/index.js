import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Fieldset = ({ className, children }) => (
    <div className={`wds-fieldset ${className}`}>
        {children}
    </div>
);

Fieldset.propTypes = {
    /**
   * @ignore
   */
    children: PropTypes.node,
    /**
   * Additional class name
   */
    className: PropTypes.string,
};

Fieldset.defaultProps = {
    children: null,
    className: '',
};

export default Fieldset;
