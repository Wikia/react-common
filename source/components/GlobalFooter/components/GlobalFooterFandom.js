import React from 'react';
import PropTypes from 'prop-types';

import BottomBar from './BottomBar';
import Section from './Section';
import Svg from './Svg';

import './GlobalFooterFandom.scss';

const GlobalFooterFandom = ({ model }) => {
    const header = model.header;
    const hasHeader = !!header;

    return <footer className="wds-global-footer">
        {hasHeader &&
            <h2 className="wds-global-footer__header">
                <a href={header.href} title={header.title.value}>
                    <Svg name={header['image-data'].name} className="wds-global-footer__header-logo" />
                </a>
            </h2>
        }
        <div className="wds-global-footer__main">
            <div className="wds-global-footer__fandom-sections">
                <Section
                    model={model.fandom_overview}
                    name="fandom-overview"
                    parentName="fandom"
                />
                <Section
                    model={model.follow_us}
                    name="follow-us"
                    parentName="fandom"
                />
            </div>
            <div className="wds-global-footer__wikia-sections">
                <Section
                    model={model.company_overview}
                    name="company-overview"
                    parentName="wikia"
                />
                <Section
                    model={model.site_overview}
                    name="site-overview"
                    parentName="wikia"
                />
                <Section
                    model={model.community}
                    name="community"
                    parentName="wikia"
                />
                <Section
                    model={model.create_wiki}
                    name="create-wiki"
                    parentName="wikia"
                />
                <Section
                    model={model.community_apps}
                    name="community-apps"
                    parentName="wikia"
                />
                <Section
                    model={model.advertise}
                    name="advertise"
                    parentName="wikia"
                />
            </div>
        </div>
        <BottomBar model={model}/>
    </footer>;
};

export default GlobalFooterFandom
