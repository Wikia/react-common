import { mount } from 'enzyme';
import React from 'react';

import Image from './index';

function mountImage(additionalProps = {}) {
    return mount(
        <Image
            alt="test"
            src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205"
            {...additionalProps}
        />,
    );
}

test('Image test', () => {
    const component = mountImage();
    expect(component).toMatchSnapshot();
});

test('Updating an image src', () => {
    const component = mountImage();

    component.setState({ src: 'test' });
    component.update();

    expect(component).toMatchSnapshot();
});

test('Mocking a loaded iamge', () => {
    const component = mountImage();

    component.find('.imageview-full').simulate('load');
    expect(component).toMatchSnapshot();
});

test('Disabled lazyLoading', () => {
    const component = mountImage({ disableLazy: true });

    expect(component).toMatchSnapshot();
});
