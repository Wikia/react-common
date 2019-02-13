import { mount } from 'enzyme';
import React from 'react';

import SimpleLocalNavigation from './index';

test('SimpleLocalNavigation renders', () => {
    const component = mount(
        <SimpleLocalNavigation className="foo">
            <span>Item 1</span>
            <span>Item 2</span>
        </SimpleLocalNavigation>
    );
    expect(component).toMatchSnapshot();
});
