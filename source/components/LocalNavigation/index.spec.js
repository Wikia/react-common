import { mount } from 'enzyme';
import React from 'react';

import LocalNavigation from './index';

test('LocalNavigation renders', () => {
    const component = mount(
        <LocalNavigation className="foo">
            <span>Item 1</span>
            <span>Item 2</span>
        </LocalNavigation>
    );
    expect(component).toMatchSnapshot();
});
