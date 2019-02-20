import React from 'react';
import renderer from 'react-test-renderer';
import merge from 'lodash/merge';

import LinkButton from './LinkButton';

const defaultProps = {
    link: {
        type: 'link-button',
        title: {
            type: 'translatable-text',
            key: 'global-navigation-create-wiki-link-start-wikia',
        },
        href: '\/\/www.wikia.com\/Special:CreateNewWiki',
        'tracking-label': 'link.start-a-wiki',
    }
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return renderer.create(<LinkButton {...computedProps} />);
}

test('LinkButton renders correctly', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
});
