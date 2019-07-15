import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import refPropType from '../../utils/refPropType';
/**
 * Basic DropdownContent component
 */
const DropdownContent = styled(({ elementRef, ...props }) => <div ref={elementRef} {...props} />)`
    // this needs to be empty - all the styles are defined in index
`;

DropdownContent.propTypes = {
    /**
     * React Component to display as content
     */
    children: PropTypes.node,

    /**
     * Additional class name
     */
    className: PropTypes.string,
    /**
     * React ref to the content DOM element
     */
    elementRef: refPropType.isRequired,
};

DropdownContent.defaultProps = {
    children: null,
    className: '',
};

export default DropdownContent;
