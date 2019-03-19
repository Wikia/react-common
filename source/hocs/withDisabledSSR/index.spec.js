import { mount } from 'enzyme/build/index';
import React from 'react';

import withDisabledSSR from './index';

const TestComponent = () => (<div> ...spinner </div>);
const ComponentWithoutSSR = withDisabledSSR(TestComponent);


test('Component without SSR', () => {
    const component = mount(
        <ComponentWithoutSSR />,
    );

    expect(component).toMatchSnapshot();
});
