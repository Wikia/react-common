import React from 'react';
import renderer from 'react-test-renderer';

/* eslint-disable no-alert */

test('Image initially loads smaller image', () => {
    const component = renderer.create(
        <FloatingButtonGroup />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});


