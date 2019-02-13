import { mount } from 'enzyme';
import React from 'react';

import SimpleLocalNavigation from './index';

test('SimpleLocalNavigation renders', () => {
    const component = mount(
        <SimpleLocalNavigation className="foo">
            <span className={SimpleLocalNavigation.ACTIVE_CLASS_NAME}>active item</span>
            <span>inactive item</span>
        </SimpleLocalNavigation>
    );
    expect(component).toMatchSnapshot();
});
