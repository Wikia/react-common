import React from 'react';
import renderer from 'react-test-renderer';

import GlobalFooter from './index';

test('GlobalFooter renders correctly for fandom.com sites', () => {
    const component = renderer.create(
        <GlobalFooter
            i18nNamespace="designSystem"
            model={{
                header: {
                    type: 'link-image',
                    'image-data': {
                        name: 'wds-company-logo-fandom-white',
                    },
                    href: 'http://fandom.wikia.com',
                    title: {
                        type: 'text',
                        value: 'Fandom',
                    },
                },
                site_overview: {
                    header: {
                        type: 'line-text',
                        title: {
                            type: 'translatable-text',
                            key: 'global-footer-company-overview-header',
                        },
                    },
                    links: [
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-company-overview-link-about',
                            },
                            href: 'http://www.wikia.com/about',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-company-overview-link-careers',
                            },
                            href: 'https://careers.wikia.com',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-company-overview-link-press',
                            },
                            href: 'http://fandom.wikia.com/press',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-company-overview-link-contact',
                            },
                            href: 'http://fandom.wikia.com/contact',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-site-overview-link-terms-of-use',
                            },
                            href: 'http://www.wikia.com/Terms_of_use',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-site-overview-link-privacy-policy',
                            },
                            href: 'http://www.wikia.com/Privacy_Policy',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-site-overview-link-global-sitemap',
                            },
                            href: 'http://www.wikia.com/Sitemap',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-site-overview-link-local-sitemap',
                            },
                            href: '/wiki/Local_Sitemap',
                        },
                    ],
                },
                fandom_apps: {
                    header: {
                        type: 'line-text',
                        title: {
                            type: 'translatable-text',
                            key: 'global-footer-community-apps-header',
                        },
                    },
                    description: {
                        type: 'translatable-text',
                        key: 'global-footer-community-apps-description',
                    },
                },
                fandom_stores: {
                    image: {
                        name: 'wds-company-store-logo-fandom',
                    },
                    links: [
                        {
                            type: 'link-image',
                            'image-data': {
                                name: 'wds-company-store-appstore',
                            },
                            href: 'https://itunes.apple.com/developer/wikia-inc./id422467077',
                        },
                        {
                            type: 'link-image',
                            'image-data': {
                                name: 'wds-company-store-googleplay',
                            },
                            href: 'https://play.google.com/store/apps/developer?id=Wikia,+Inc.',
                        },
                    ],
                },
                ddb_stores: {
                    image: {
                        name: 'wds-company-store-logo-ddb',
                        caption: {
                            type: 'text',
                            key: 'D&D Beyond',
                        },
                    },
                    links: [
                        {
                            type: 'link-image',
                            'image-data': {
                                name: 'wds-company-store-appstore',
                            },
                            href: 'https://apps.apple.com/us/app/d-d-beyond/id1263629972',
                        },
                        {
                            type: 'link-image',
                            'image-data': {
                                name: 'wds-company-store-googleplay',
                            },
                            href: 'https://play.google.com/store/apps/details?id=com.curse.dndbeyond&hl=en',
                        },
                    ],
                },
                advertise: {
                    header: {
                        type: 'line-text',
                        title: {
                            type: 'translatable-text',
                            key: 'global-footer-advertise-header',
                        },
                    },
                    links: [
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-advertise-link-media-kit',
                            },
                            href: 'http://fandom.wikia.com/mediakit',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-advertise-link-contact',
                            },
                            href: 'http://fandom.wikia.com/mediakit#contact',
                        },
                    ],
                },
                licensing_and_vertical: {
                    description: {
                        type: 'translatable-text',
                        key: 'global-footer-licensing-and-vertical-description',
                        params: {
                            sitename: {
                                type: 'text',
                                value: 'Muppet Wiki',
                            },
                            vertical: {
                                type: 'translatable-text',
                                key: 'global-footer-licensing-and-vertical-description-param-vertical-tv',
                            },
                            license: {
                                type: 'link-text',
                                title: {
                                    type: 'text',
                                    value: 'CC-BY-SA',
                                },
                                href: 'http://www.wikia.com/Licensing',
                                tracking_label: 'license',
                            },
                        },
                    },
                },
                fandom_overview: {
                    header: {
                        type: 'line-text',
                        title: {
                            type: 'translatable-text',
                            key: 'global-footer-fandom-overview-header',
                        },
                    },
                    links: [
                        {
                            type: 'link-text',
                            title: {
                                type: 'text',
                                key: 'Fandom',
                            },
                            href: 'https://www.fandom.com/',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'text',
                                key: 'Gamepedia',
                            },
                            href: 'https://www.gamepedia.com/',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'text',
                                key: 'D&D Beyond',
                            },
                            href: 'https://www.dndbeyond.com/',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'text',
                                key: 'Muthead',
                            },
                            href: 'https://www.muthead.com/',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'text',
                                key: 'Futhead',
                            },
                            href: 'https://www.futhead.com/',
                        },
                    ],
                },
                follow_us: {
                    header: {
                        type: 'line-text',
                        title: {
                            type: 'translatable-text',
                            key: 'global-footer-follow-us-header',
                        },
                    },
                    links: [
                        {
                            type: 'link-image',
                            image: 'wds-icons-facebook',
                            'image-data': {
                                type: 'wds-svg',
                                name: 'wds-icons-facebook',
                            },
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-follow-us-link-facebook',
                            },
                            href: '#',
                            tracking_label: 'follow-us.facebook',
                        },
                        {
                            type: 'link-image',
                            image: 'wds-icons-twitter',
                            'image-data': {
                                type: 'wds-svg',
                                name: 'wds-icons-twitter',
                            },
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-follow-us-link-twitter',
                            },
                            href: 'https://twitter.com/getfandom',
                            tracking_label: 'follow-us.twitter',
                        },
                        {
                            type: 'link-image',
                            image: 'wds-icons-youtube',
                            'image-data': {
                                type: 'wds-svg',
                                name: 'wds-icons-youtube',
                            },
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-follow-us-link-youtube',
                            },
                            href: 'https://www.youtube.com/fandomentertainment',
                            tracking_label: 'follow-us.youtube',
                        },
                        {
                            type: 'link-image',
                            image: 'wds-icons-instagram',
                            'image-data': {
                                type: 'wds-svg',
                                name: 'wds-icons-instagram',
                            },
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-follow-us-link-instagram',
                            },
                            href: 'https://www.instagram.com/getfandom/',
                            tracking_label: 'follow-us.instagram',
                        },
                        {
                            type: 'link-image',
                            image: 'wds-icons-linkedin',
                            'image-data': {
                                type: 'wds-svg',
                                name: 'wds-icons-linkedin',
                            },
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-follow-us-link-linkedin',
                            },
                            href: 'https://www.linkedin.com/company/157252',
                            tracking_label: 'follow-us.linkedin',
                        },
                    ],
                },
                community: {
                    header: {
                        type: 'line-text',
                        title: {
                            type: 'translatable-text',
                            key: 'global-footer-community-header',
                        },
                    },
                    links: [
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-community-link-community-central',
                            },
                            href: 'http://community.wikia.com/wiki/Community_Central',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-community-link-support',
                            },
                            href: 'http://community.wikia.com/wiki/Special:Contact',
                        },
                        {
                            type: 'link-text',
                            title: {
                                type: 'translatable-text',
                                key: 'global-footer-community-link-help',
                            },
                            href: 'http://community.wikia.com/wiki/Help:Contents',
                        },
                    ],
                },
                'is-wikia-org': false,
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('GlobalFooter renders correctly for wikia.org', () => {
    const component = renderer.create(
        <GlobalFooter
            i18nNamespace="designSystem"
            model={{
                header: {
                    type: 'link-image',
                    'image-data': { type: 'wds-svg', name: 'wds-company-logo-wikia-org' },
                    href: 'https://www.wikia.org',
                    title: { type: 'text', value: 'Wikia.org' },
                    tracking_label: 'logo',
                },
                site_overview: {
                    links: [{
                        type: 'link-text',
                        title: { type: 'translatable-text', key: 'global-footer-site-overview-link-terms-of-use' },
                        href: 'https://www.fandom.com/terms-of-use',
                        tracking_label: 'site-overview.terms-of-use',
                    }, {
                        type: 'link-text',
                        title: { type: 'translatable-text', key: 'global-footer-site-overview-link-privacy-policy' },
                        href: 'https://www.fandom.com/privacy-policy',
                        tracking_label: 'site-overview.privacy-policy',
                    }, {
                        type: 'link-text',
                        title: { type: 'translatable-text', key: 'global-footer-community-link-support' },
                        href: '//community.fandom.com/wiki/Special:Contact',
                        tracking_label: 'community.support',
                    }, {
                        type: 'link-text',
                        title: { type: 'translatable-text', key: 'global-footer-community-link-help' },
                        href: '//community.fandom.com/wiki/Help:Contents',
                        tracking_label: 'community.help',
                    }],
                },
                mobile_site_button: {
                    type: 'link-text',
                    title: { type: 'translatable-text', key: 'global-footer-mobile-site-link' },
                },
                'is-wikia-org': true,
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
