import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Vignette from './index';

test('Vignette renders correctly with default values', () => {
    const component = renderer.create(
        <Vignette
            image="https://vignette.wikia.nocookie.net/541b323b-a3c2-4d4f-be1f-500cf13573b8"
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Vignette renders correctly with non-vignette image', () => {
    const component = renderer.create(
        <Vignette
            image="https://example.com/vimage.jpeg"
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Vignette renders correctly with broken vignette image', () => {
    const component = renderer.create(
        <Vignette
            image="https://vignette.wikia.nocookie.net/path/to/image.jpeg"
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Vignette renders plain image tag when no width and height present', () => {
    const image = 'https://vignette.wikia.nocookie.net/541b323b-a3c2-4d4f-be1f-500cf13573b8';
    const component = shallow(
        <Vignette image={image} />
    );
    expect(component.find('img').prop('src')).toEqual(image);
});
