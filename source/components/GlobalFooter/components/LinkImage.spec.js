import React from 'react';
import renderer from 'react-test-renderer';

import LinkImage from './LinkImage';

test('LinkImage renders correctly', () => {
    const component = renderer.create(
        <LinkImage model={{
            "type": "link-image",
            "image-data": {
                "name": "wds-company-store-appstore"
            },
            "title": {
                "type": "translatable-text",
                "key": "global-footer-community-apps-link-app-store"
            },
            "href": "https:\/\/itunes.apple.com\/developer\/wikia-inc.\/id422467077"
        }} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
