// disable jest here
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import usePortal from '../../hooks/usePortal';

/**
 * A `Portal` Component that simplifies the usage of React portals.
 */
const Portal = /* istanbul ignore next */ ({ id, children }) => {
    const target = usePortal(id);

    return createPortal(
        children,
        target,
    );
};

Portal.propTypes = {
    /** @ignore */
    children: PropTypes.node.isRequired,
    /** `ID` of the DOM element */
    id: PropTypes.string.isRequired,
};

export default Portal;
