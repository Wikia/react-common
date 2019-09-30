import React from 'react';
import renderer from 'react-test-renderer';

import Section from './Section';

test('Section with links only renders correctly', () => {
    const component = renderer.create(
        <Section
            name="site_overview"
            model={{
                links: [
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Terms of Use',
                        },
                        href: 'http://www.wikia.com/Terms_of_use',
                    },
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Privacy Policy',
                        },
                        href: 'http://www.wikia.com/Privacy_Policy',
                    },
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Global Sitemap',
                        },
                        href: 'http://www.wikia.com/Sitemap',
                    },
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Local Sitemap',
                        },
                        href: '/wiki/Local_Sitemap',
                    },
                ],
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Section with header renders correctly', () => {
    const component = renderer.create(
        <Section
            name="site_overview"
            model={{
                header: {
                    type: 'line-text',
                    title: {
                        type: 'translatable-text',
                        key: 'Overview',
                    },
                },
                links: [
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'About',
                        },
                        href: 'http://www.wikia.com/about',
                    },
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Careers',
                        },
                        href: 'https://careers.wikia.com',
                    },
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Press',
                        },
                        href: 'http://fandom.wikia.com/press',
                    },
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Contact',
                        },
                        href: 'http://fandom.wikia.com/contact',
                    },
                ],
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Section with description renders correctly', () => {
    const component = renderer.create(
        <Section
            name="site_overview"
            model={{
                description: {
                    type: 'translatable-text',
                    key: "Can't find a community you love? Create your own and start something epic.",
                },
                links: [
                    {
                        type: 'link-text',
                        title: {
                            type: 'translatable-text',
                            key: 'Start a wiki',
                        },
                        href: 'http://www.wikia.com/Special:CreateNewWiki',
                    },
                ],
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Section with link-image renders correctly', () => {
    const component = renderer.create(
        <Section
            name="site_overview"
            model={{
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
                ],
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Section with link-branded renders correctly', () => {
    const component = renderer.create(
        <Section
            name="site_overview"
            model={{
                links: [
                    {
                        type: 'link-branded',
                        brand: 'games',
                        title: {
                            type: 'translatable-text',
                            key: 'Games',
                        },
                        href: 'http://fandom.wikia.com/games',
                    },
                ],
            }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
