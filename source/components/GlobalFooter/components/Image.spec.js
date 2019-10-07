import React from 'react';
import renderer from 'react-test-renderer';

import Image from './Image';

test('Image without caption renders correctly', () => {
    const component = renderer.create(
        <Image
            name="wds-company-store-logo-fandom"
            alt="whatever"
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Image with translatable caption renders correctly', () => {
    const component = renderer.create(
        <Image
            name="wds-company-store-logo-fandom"
            caption={{
                type: 'translatable-text',
                key: 'global-footer-community-apps-link-app-store',
            }}
            alt="whatever"
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Image with non-translated caption renders correctly', () => {
    const component = renderer.create(
        <Image
            name="wds-company-store-logo-fandom"
            caption={{
                type: 'text',
                value: 'Whatever',
            }}
            alt="whatever"
        />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
