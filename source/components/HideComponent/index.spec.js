import React from 'react';
import renderer from 'react-test-renderer';

import HideComponent from './index';

test('Hide component tree', () => {
    const component = renderer.create(
        <HideComponent isHidden>
            <div> test </div>
        </HideComponent>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Show component tree', () => {
    const component = renderer.create(
        <HideComponent>
            <div> test </div>
        </HideComponent>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
