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
