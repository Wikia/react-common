import React from 'react';
import { shallow } from 'enzyme';

import Timeago from './index';

test('Renders Timeago component', () => {
    const datetime = 'Tue Jul 17 2015 23:58:43 GMT+0000';
    const component = shallow(<Timeago datetime={datetime} />);

    expect(component).toMatchSnapshot();
});
