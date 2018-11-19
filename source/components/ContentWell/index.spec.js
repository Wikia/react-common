import React from 'react';
import renderer from 'react-test-renderer';

import ContentWell from './index';

test('ContentWell renders correctly with default values', () => {
    const component = renderer.create(
        <ContentWell />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('ContentWell renders correctly with extra class name', () => {
    const component = renderer.create(
        <ContentWell className="extra-class-name" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('ContentWell renders correctly with a children', () => {
    const component = renderer.create(
        <ContentWell>
            <strong>bold</strong>
&nbsp;text
        </ContentWell>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
