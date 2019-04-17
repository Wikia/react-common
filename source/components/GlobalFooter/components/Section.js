import React from 'react';
import { withTranslation } from 'react-i18next';

import LinkImage from './LinkImage';
import LinkBranded from './LinkBranded';
import LinkText from './LinkText';

const renderLink = (type, model) => {
    switch (type) {
        case 'link-image':
            return <LinkImage model={model} />;
        case 'link-branded':
            return <LinkBranded model={model} />;
        default:
            return <LinkText model={model}/>;
    }
};

const Section = ({ t, model, name, parentName }) => {
    const title = model.header ? model.header.title : '';
    const description = model.description;
    const links = model.links;

    return <section className={`wds-global-footer__${parentName}-section wds-is-${name}`}>
        {title && <h3 className="wds-global-footer__section-header">{t(title.key)}</h3>}
        {description && <span className="wds-global-footer__section-description">{t(description.key)}</span>}

        <ul className="wds-global-footer__links-list">
            {links.map((link, index) =>
                <li className="wds-global-footer__links-list-item" key={index}>
                    {renderLink(link.type, link)}
                </li>
            )}

        </ul>
    </section>
};

export default withTranslation()(Section);
