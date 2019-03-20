import { mount } from 'enzyme/build/index';
import React from 'react';

import withHideComponent from './index';

const WithHiddenProp = () => (<div> Alt Fallback </div>);
const ComponentWithOutHidden = withHideComponent(WithHiddenProp);


test('Hide component', () => {
    const component = mount(
        <ComponentWithOutHidden isHidden />,
    );

    expect(component).toMatchSnapshot();
});

test('Display component', () => {
    const component = mount(
        <ComponentWithOutHidden />,
    );

    expect(component).toMatchSnapshot();
});
