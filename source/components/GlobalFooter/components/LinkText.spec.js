import React from 'react';
import renderer from 'react-test-renderer';

import LinkText from './LinkText';

test('LinkText renders correctly', () => {
    const component = renderer.create(
        <LinkText model={{
            "type": "link-text",
            "title": {
                "type": "translatable-text",
                "key": "About"
            },
            "href": "http:\/\/www.wikia.com\/about"
        }} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
