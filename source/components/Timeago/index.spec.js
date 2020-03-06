import React from 'react';
import { shallow } from 'enzyme';

import Timeago from './index';

test('Renders Timeago component', () => {
    const component = shallow(<Timeago datetime={1582205173526} />);

    expect(component).toMatchSnapshot();
});
