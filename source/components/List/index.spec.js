import React from 'react';
import { shallow } from 'enzyme';

import List from './index';

test('List renders with children inside', () => {
    const component = shallow(
        <List>
            <li>First one</li>
            <li>Second one</li>
            <li>Third one</li>
        </List>
    );
    expect(component).toMatchSnapshot();
});
