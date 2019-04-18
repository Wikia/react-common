import React from 'react';
import renderer from 'react-test-renderer';

import LinkBranded from './LinkBranded';

test('LinkBranded renders correctly', () => {
    const component = renderer.create(
        <LinkBranded model={{
            type: 'link-branded',
            brand: 'explore-wikis',
            title: {
                type: 'translatable-text',
                key: 'global-footer-fandom-overview-link-explore-wikis',
            },
            href: 'http://fandom.wikia.com/explore',
        }}
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
