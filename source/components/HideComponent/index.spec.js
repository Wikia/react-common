import React from 'react';
import { mount } from 'enzyme';

import HideComponent from './index';

test('Hide component tree', () => {
    const component = mount(
        <HideComponent hide>
            <div> test </div>
        </HideComponent>,
    );
    expect(component).toMatchSnapshot();
});

test('Show component tree', () => {
    const component = mount(
        <HideComponent>
            <div> test </div>
        </HideComponent>,
    );
    expect(component).toMatchSnapshot();
});
