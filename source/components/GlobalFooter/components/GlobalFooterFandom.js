import React from 'react';
import PropTypes from 'prop-types';

import LogoFandomWhite from '../../../assets/LogoFandomWhite';

import BottomBar from './BottomBar';
import Section from './Section';

const GlobalFooterFandom = ({ model }) => {
    const { header } = model;
    const hasHeader = !!header;

    return (
        <footer className="wds-global-footer">
            {hasHeader
            && (
                <h2 className="wds-global-footer__header">
                    <a href={header.href} title={header.title.value}>
                        <LogoFandomWhite className="wds-global-footer__header-logo" />
                    </a>
                </h2>
            )
            }
            <div className="wds-global-footer__main">
                <div className="wds-global-footer__column">
                    <Section model={model.fandom_overview} name="fandom-overview" />
                    <Section model={model.follow_us} name="follow-us" />
                </div>
                <div className="wds-global-footer__column">
                    <Section model={model.site_overview} name="site-overview" />
                </div>
                <div className="wds-global-footer__column">
                    <Section model={model.community} name="community" />
                    <Section model={model.advertise} name="advertise" />
                </div>
                <div className="wds-global-footer__column">
                    <Section model={model.fandom_apps} name="fandom-apps" />
                    <Section model={model.fandom_stores} name="fandom-stores" />
                    <Section model={model.ddb_stores} name="ddb-stores" />
                </div>
            </div>
            <BottomBar model={model} />
        </footer>
    );
};

GlobalFooterFandom.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default GlobalFooterFandom;
