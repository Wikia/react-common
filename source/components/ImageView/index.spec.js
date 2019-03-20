import { mount } from 'enzyme/build/index';
import React from 'react';
import renderer from 'react-test-renderer';

import ImageView from './index';

/* eslint-disable no-alert */

test('Image test', () => {
    const component = renderer.create(
        <ImageView alt="tets" src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});


test('Updating an image src', () => {
    const component = mount(
        <ImageView alt="tets" src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205" />
    );

    expect(component).toMatchSnapshot();

    component.setState({ src: 'test' });

    component.update();

    expect(component).toMatchSnapshot();
});


test('Mocking a loaded iamge', () => {
    const component = mount(
        <ImageView alt="tets" src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205" />
    );

    expect(component).toMatchSnapshot();
    component.find('.imageview-full').simulate('load');
    expect(component).toMatchSnapshot();
});

test('Disabled lazyj', () => {
    const component = mount(
        <ImageView disableLazy alt="tets" src="http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205" />
    );

    expect(component).toMatchSnapshot();
});
