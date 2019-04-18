import React from 'react';
import PropTypes from 'prop-types';

import GlobalFooterWikiaOrg from './components/GlobalFooterWikiaOrg';
import GlobalFooterFandom from './components/GlobalFooterFandom';

const GlobalFooter = ({ model }) => {
    const isWikiaOrg = model['is-wikia-org'];

    if (isWikiaOrg) {
        return <GlobalFooterWikiaOrg model={model} />
    }

    return <GlobalFooterFandom model={model} />
};

GlobalFooter.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default GlobalFooter;
