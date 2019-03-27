import { mount } from 'enzyme';
import React from 'react';

import Image from './index';


// jest.mock('../ImagePreloader', () => mockComponent('ImagePreloader'));

function mountImage(additionalProps = {}) {
    const wrapper = mount(
        <Image
            alt="test"
            src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205"
            {...additionalProps}
        />,
    );
    return wrapper;
}

test('Image test', () => {
    const component = mountImage();
    expect(component).toMatchSnapshot();
});

test('Image test for non-vignette', () => {
    const component = mountImage({ src: 'https://foo.jpg' });
    expect(component).toMatchSnapshot();
});

test('Updating an image src', () => {
    const component = mountImage();

    component.setState({ src: 'test' });
    component.update();

    expect(component).toMatchSnapshot();
});

test('Disabled lazyLoading', () => {
    const component = mountImage({ disableLazy: true });

    expect(component).toMatchSnapshot();
});
