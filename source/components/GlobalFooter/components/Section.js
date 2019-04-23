import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

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
            return <LinkText model={model} />;
    }
};

const Section = ({ model, name, parentName }) => {
    const title = model.header ? model.header.title : '';
    const { description } = model;
    const { links } = model;
    const [t] = useTranslation();

    return (
        <section className={`wds-global-footer__${parentName}-section wds-is-${name}`}>
            {title && <h3 className="wds-global-footer__section-header">{t(title.key)}</h3>}
            {description && <span className="wds-global-footer__section-description">{t(description.key)}</span>}

            <ul className="wds-global-footer__links-list">
                {links.map((link, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li className="wds-global-footer__links-list-item" key={index}>
                        {renderLink(link.type, link)}
                    </li>
                ))}

            </ul>
        </section>
    );
};

Section.propTypes = {
    model: PropTypes.shape().isRequired,
    name: PropTypes.string.isRequired,
    parentName: PropTypes.string.isRequired,
};

export default Section;
