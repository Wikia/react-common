import { mount } from 'enzyme';
import React from 'react';

import withHideComponent from './index';

const WithHideProp = () => (<div> Alt Fallback </div>);
const ComponentWithHideHoC = withHideComponent(WithHideProp);

test('Hide component', () => {
    const component = mount(
        <ComponentWithHideHoC hide />,
    );

    expect(component).toMatchSnapshot();
});

test('Display component', () => {
    const component = mount(
        <ComponentWithHideHoC />,
    );

    expect(component).toMatchSnapshot();
});
