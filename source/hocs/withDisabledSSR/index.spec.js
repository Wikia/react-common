import { mount, shallow } from 'enzyme/build/index';
import React from 'react';
import renderer from 'react-test-renderer';

import withDisabledSSR from './index';

const TestComponent = () => (<div> ...spinner </div>);
const ComponentWithoutSSR = withDisabledSSR(TestComponent);


test('Default Spinner with timeout', () => {
    const component = mount(
        <ComponentWithoutSSR />,
    );

    expect(component).toMatchSnapshot();
});

test('Default Spinner with timeout 2', () => {
    const component = renderer.create(
        <ComponentWithoutSSR />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Default Spinner with timeout 3', () => {
    const component = shallow(
        <ComponentWithoutSSR />,
    );
    expect(component).toMatchSnapshot();
});
