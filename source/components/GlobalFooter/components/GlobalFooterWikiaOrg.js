import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LogoWikiaOrgWhite from '../../../assets/LogoWikiaOrgWhite';

import I18nNamespaceContext from '../context/I18nNamespaceContext';

const GlobalFooterWikiaOrg = ({ model }) => {
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <footer className="wds-global-footer-wikia-org">
            {model.header
            && (
                <h2 className="wds-global-footer-wikia-org__header">
                    <a href={model.header.href} title={model.header.title.value}>
                        <LogoWikiaOrgWhite className="wds-global-footer__header-logo" />
                    </a>
                </h2>
            )
            }
            <ul className="wds-global-footer-wikia-org__links">
                {model.site_overview.links.map((link, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li className="wds-global-footer-wikia-org__link" key={index}>
                        <a href={link.href} data-tracking-label={link.tracking_label}>
                            {t(link.title.key)}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

GlobalFooterWikiaOrg.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default GlobalFooterWikiaOrg;
