import React from 'react';
import renderer from 'react-test-renderer';

import RadioGroup from './index';


test('RadioGroup renders correctly with default values', () => {
    const component = renderer.create(
        <RadioGroup name="group">
            Content
        </RadioGroup>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('RadioGroup renders correctly with title', () => {
    const component = renderer.create(
        <RadioGroup name="group" title="Hello world">
            Content with title
        </RadioGroup>,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
