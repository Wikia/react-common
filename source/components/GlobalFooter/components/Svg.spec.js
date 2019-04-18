import React from 'react';
import renderer from 'react-test-renderer';

import Svg from './Svg';

test('Svg renders correctly', () => {
    const component = renderer.create(
        <Svg name="wds-company-logo-fandom-white" className="some-css-class" />,
    );

    expect(component.toJSON()).toMatchSnapshot();
});
