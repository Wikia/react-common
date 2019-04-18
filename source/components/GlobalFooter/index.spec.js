import React from 'react';
import renderer from 'react-test-renderer';

import GlobalFooter from './index';

test('GlobalFooter renders correctly for fandom.com sites', () => {
    const component = renderer.create(
        <GlobalFooter model={{
            "header": {
                "type": "link-image",
                "image-data": {
                    "name": "wds-company-logo-fandom-white"
                },
                "href": "http:\/\/fandom.wikia.com",
                "title": {
                    "type": "text",
                    "value": "Fandom powered by Wikia"
                }
            },
            "company_overview": {
                "header": {
                    "type": "line-text",
                    "title": {
                        "type": "translatable-text",
                        "key": "Overview"
                    }
                },
                "links": [
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "About"
                        },
                        "href": "http:\/\/www.wikia.com\/about"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Careers"
                        },
                        "href": "https:\/\/careers.wikia.com"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Press"
                        },
                        "href": "http:\/\/fandom.wikia.com\/press"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Contact"
                        },
                        "href": "http:\/\/fandom.wikia.com\/contact"
                    }
                ]
            },
            "site_overview": {
                "links": [
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Terms of Use"
                        },
                        "href": "http:\/\/www.wikia.com\/Terms_of_use"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Privacy Policy"
                        },
                        "href": "http:\/\/www.wikia.com\/Privacy_Policy"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Global Sitemap"
                        },
                        "href": "http:\/\/www.wikia.com\/Sitemap"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Local Sitemap"
                        },
                        "href": "\/wiki\/Local_Sitemap"
                    }
                ]
            },
            "create_wiki": {
                "description": {
                    "type": "translatable-text",
                    "key": "Can't find a community you love? Create your own and start something epic."
                },
                "links": [
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Start a wiki"
                        },
                        "href": "http:\/\/www.wikia.com\/Special:CreateNewWiki"
                    }
                ]
            },
            "community_apps": {
                "header": {
                    "type": "line-text",
                    "title": {
                        "type": "translatable-text",
                        "key": "Community Apps"
                    }
                },
                "description": {
                    "type": "translatable-text",
                    "key": "Take your favorite fandoms with you and never miss a beat."
                },
                "links": [
                    {
                        "type": "link-image",
                        "image-data": {
                            "name": "wds-company-store-appstore"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-community-apps-link-app-store"
                        },
                        "href": "https:\/\/itunes.apple.com\/developer\/wikia-inc.\/id422467077"
                    },
                    {
                        "type": "link-image",
                        "image-data": {
                            "name": "wds-company-store-googleplay"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-community-apps-link-google-play"
                        },
                        "href": "https:\/\/play.google.com\/store\/apps\/developer?id=Wikia,+Inc."
                    }
                ]
            },
            "advertise": {
                "header": {
                    "type": "line-text",
                    "title": {
                        "type": "translatable-text",
                        "key": "Advertise"
                    }
                },
                "links": [
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Media Kit"
                        },
                        "href": "http:\/\/fandom.wikia.com\/mediakit"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Contact"
                        },
                        "href": "http:\/\/fandom.wikia.com\/mediakit#contact"
                    }
                ]
            },
            "licensing_and_vertical": {
                "description": {
                    "type": "translatable-text",
                    "key": "global-footer-licensing-and-vertical-description",
                    "params": {
                        "sitename": {
                            "type": "text",
                            "value": "Muppet Wiki"
                        },
                        "vertical": {
                            "type": "translatable-text",
                            "key": "global-footer-licensing-and-vertical-description-param-vertical-tv"
                        },
                        "license": {
                            "type": "link-text",
                            "title": {
                                "type": "text",
                                "value": "CC-BY-SA"
                            },
                            "href": "http://www.wikia.com/Licensing",
                            "tracking_label": "license"
                        }
                    }
                }
            },
            "fandom_overview": {
                "header": {
                    "type": "line-text",
                    "title": {
                        "type": "translatable-text",
                        "key": "global-footer-fandom-overview-header"
                    }
                },
                "links": [
                    {
                        "type": "link-branded",
                        "brand": "games",
                        "title": {
                            "type": "translatable-text",
                            "key": "Games"
                        },
                        "href": "http:\/\/fandom.wikia.com\/games"
                    },
                    {
                        "type": "link-branded",
                        "brand": "movies",
                        "title": {
                            "type": "translatable-text",
                            "key": "Movies"
                        },
                        "href": "http:\/\/fandom.wikia.com\/movies"
                    },
                    {
                        "type": "link-branded",
                        "brand": "tv",
                        "title": {
                            "type": "translatable-text",
                            "key": "TV"
                        },
                        "href": "http:\/\/fandom.wikia.com\/tv"
                    },
                    {
                        "type": "link-branded",
                        "brand": "explore-wikis",
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-fandom-overview-link-explore-wikis"
                        },
                        "href": "http:\/\/fandom.wikia.com\/explore"
                    }
                ]
            },
            "follow_us": {
                "header": {
                    "type": "line-text",
                    "title": {
                        "type": "translatable-text",
                        "key": "Follow Us"
                    }
                },
                "links": [
                    {
                        "type": "link-image",
                        "image": "wds-icons-facebook",
                        "image-data": {
                            "type": "wds-svg",
                            "name": "wds-icons-facebook"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-follow-us-link-facebook"
                        },
                        "href": "#",
                        "tracking_label": "follow-us.facebook"
                    },
                    {
                        "type": "link-image",
                        "image": "wds-icons-twitter",
                        "image-data": {
                            "type": "wds-svg",
                            "name": "wds-icons-twitter"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-follow-us-link-twitter"
                        },
                        "href": "https://twitter.com/getfandom",
                        "tracking_label": "follow-us.twitter"
                    },
                    {
                        "type": "link-image",
                        "image": "wds-icons-youtube",
                        "image-data": {
                            "type": "wds-svg",
                            "name": "wds-icons-youtube"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-follow-us-link-youtube"
                        },
                        "href": "https://www.youtube.com/channel/UC988qTQImTjO7lUdPfYabgQ",
                        "tracking_label": "follow-us.youtube"
                    },
                    {
                        "type": "link-image",
                        "image": "wds-icons-instagram",
                        "image-data": {
                            "type": "wds-svg",
                            "name": "wds-icons-instagram"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-follow-us-link-instagram"
                        },
                        "href": "https://www.instagram.com/getfandom/",
                        "tracking_label": "follow-us.instagram"
                    },
                    {
                        "type": "link-image",
                        "image": "wds-icons-linkedin",
                        "image-data": {
                            "type": "wds-svg",
                            "name": "wds-icons-linkedin"
                        },
                        "title": {
                            "type": "translatable-text",
                            "key": "global-footer-follow-us-link-linkedin"
                        },
                        "href": "https://www.linkedin.com/company/157252",
                        "tracking_label": "follow-us.linkedin"
                    }
                ]
            },
            "community": {
                "header": {
                    "type": "line-text",
                    "title": {
                        "type": "translatable-text",
                        "key": "Community"
                    }
                },
                "links": [
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Community Central"
                        },
                        "href": "http:\/\/community.wikia.com\/wiki\/Community_Central"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Support"
                        },
                        "href": "http:\/\/community.wikia.com\/wiki\/Special:Contact"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Fan Contributor Program"
                        },
                        "href": "http:\/\/fandom.wikia.com\/fan-contributor"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "WAM Score"
                        },
                        "href": "http:\/\/www.wikia.com\/WAM"
                    },
                    {
                        "type": "link-text",
                        "title": {
                            "type": "translatable-text",
                            "key": "Help"
                        },
                        "href": "http:\/\/community.wikia.com\/wiki\/Help:Contents"
                    }
                ]
            },
            "is-wikia-org": false
        }} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('GlobalFooter renders correctly for wikia.org', () => {
    const component = renderer.create(
        <GlobalFooter model={{
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

