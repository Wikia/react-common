import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Svg from './Svg';

const GlobalFooterWikiaOrg = ({ t, model }) => {
    return <React.Fragment>
        {model.header &&
            <h2 className="wds-global-footer-wikia-org__header">
                <a href={model.header.href} title={model.header.title.value}>
                    <Svg name={model.header['image-data'].name} className="wds-global-footer__header-logo" />
                </a>
            </h2>
        }
        <ul className="wds-global-footer-wikia-org__links">
            <li className="wds-global-footer-wikia-org__link">
                {t('global-footer-site-overview-link-wikia-inc', {year: year})}
            </li>
            {model.site_overview.links.map(link =>
                <li className="wds-global-footer-wikia-org__link">
                    <a href={link.href} data-tracking-label={link.tracking_label}>
                        {t(link.title.key)}
                    </a>
                </li>
            )}
        </ul>
    </React.Fragment>
};

export default withTranslation()(GlobalFooterWikiaOrg);
