import React from 'react';
import renderer from 'react-test-renderer';

import Fieldset from './index';

test('Fieldset renders correctly with default values', () => {
    const component = renderer.create(
        <Fieldset />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Fieldset renders correctly with extra class name', () => {
    const component = renderer.create(
        <Fieldset className="extra-class-name" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Fieldset renders correctly with a children', () => {
    const component = renderer.create(
        <Fieldset>
            <strong>bold</strong>
&nbsp;text
        </Fieldset>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
