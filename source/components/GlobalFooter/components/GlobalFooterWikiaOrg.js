import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Svg from './Svg';
import './GlobalFooterWikiaOrg.scss';

const GlobalFooterWikiaOrg = ({ model }) => {
    const year = new Date().getFullYear();
    const [t] = useTranslation();

    return (
        <footer className="wds-global-footer-wikia-org">
            {model.header
            && (
                <h2 className="wds-global-footer-wikia-org__header">
                    <a href={model.header.href} title={model.header.title.value}>
                        <Svg name={model.header['image-data'].name} className="wds-global-footer__header-logo" />
                    </a>
                </h2>
            )
            }
            <ul className="wds-global-footer-wikia-org__links">
                <li className="wds-global-footer-wikia-org__link">
                    {t('global-footer-site-overview-link-wikia-inc', { year })}
                </li>
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
    model: PropTypes.shape.isRequired,
};

export default GlobalFooterWikiaOrg;
