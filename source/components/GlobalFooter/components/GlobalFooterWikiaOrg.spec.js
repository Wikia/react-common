import React from 'react';
import renderer from 'react-test-renderer';

import GlobalFooterWikiaOrg from './GlobalFooterWikiaOrg';

test('GlobalFooterWikiaOrg renders correctly', () => {
    const component = renderer.create(
        <GlobalFooterWikiaOrg model={{
            "header": {
                "type": "link-image",
                "image-data": {"type": "wds-svg", "name": "wds-company-logo-wikia-org"},
                "href": "https:\/\/www.wikia.org",
                "title": {"type": "text", "value": "Wikia.org"},
                "tracking_label": "logo"
            },
            "site_overview": {
                "links": [{
                    "type": "link-text",
                    "title": {"type": "translatable-text", "key": "global-footer-site-overview-link-terms-of-use"},
                    "href": "https:\/\/www.fandom.com\/terms-of-use",
                    "tracking_label": "site-overview.terms-of-use"
                }, {
                    "type": "link-text",
                    "title": {"type": "translatable-text", "key": "global-footer-site-overview-link-privacy-policy"},
                    "href": "https:\/\/www.fandom.com\/privacy-policy",
                    "tracking_label": "site-overview.privacy-policy"
                }, {
                    "type": "link-text",
                    "title": {"type": "translatable-text", "key": "global-footer-community-link-support"},
                    "href": "\/\/community.fandom.com\/wiki\/Special:Contact",
                    "tracking_label": "community.support"
                }, {
                    "type": "link-text",
                    "title": {"type": "translatable-text", "key": "global-footer-community-link-help"},
                    "href": "\/\/community.fandom.com\/wiki\/Help:Contents",
                    "tracking_label": "community.help"
                }]
            },
            "mobile_site_button": {
                "type": "link-text",
                "title": {"type": "translatable-text", "key": "global-footer-mobile-site-link"}
            },
            "is-wikia-org": true
        }}/>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

