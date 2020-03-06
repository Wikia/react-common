import React from 'react';
import { shallow } from 'enzyme';

import Timeago from './index';

test('Renders Timeago component', () => {
    const datetime = Date.now() - 365 * 3600 * 1000;
    const component = shallow(<Timeago datetime={datetime} />);

    expect(component).toMatchSnapshot();
});
