import { mount } from 'enzyme/build/index';
import React from 'react';

import withErrorBoundary from './index';

function Something() {
    // this is just a placeholder
    throw new Error('test');
}
const SimpleComponent = () => (
    <div>
        <Something />
    </div>
);

test('Default fallback error boundary', () => {
    const ComponentWithErrorBoundary = withErrorBoundary(SimpleComponent, 'TestBoundaryName', 'FandomCreator', 'v1');

    const component = mount(
        <ComponentWithErrorBoundary />,
    );


    expect(component).toMatchSnapshot();
});

test('Renders nothing when there is undefined fallback', () => {
    const ComponentWithErrorBoundary = withErrorBoundary(SimpleComponent, 'TestBoundaryName', 'FEPO', 'v2', null);

    const component = mount(
        <ComponentWithErrorBoundary />,
    );

    expect(component).toMatchSnapshot();
});
