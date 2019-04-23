import React from 'react';
import PropTypes from 'prop-types';

import GlobalFooterWikiaOrg from './components/GlobalFooterWikiaOrg';
import GlobalFooterFandom from './components/GlobalFooterFandom';
import { I18nNamespaceProvider } from './context/I18nNamespaceContext';

import './styles.scss';

const GlobalFooter = ({ model, i18nNamespace }) => {
    const isWikiaOrg = model['is-wikia-org'];

    return (
        <I18nNamespaceProvider value={i18nNamespace}>
            {isWikiaOrg
                ? <GlobalFooterWikiaOrg model={model} />
                : <GlobalFooterFandom model={model} />
            }
        </I18nNamespaceProvider>
    );
};

GlobalFooter.propTypes = {
    /** i18next namespace for translated strings from Design System */
    i18nNamespace: PropTypes.string.isRequired,
    /** data model retrieved from DesignSystem API */
    model: PropTypes.shape().isRequired,
};

export default GlobalFooter;
