import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

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

test('Default empty fallback error boundary', () => {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');

    const ComponentWithErrorBoundary = withErrorBoundary(SimpleComponent);

    const component = mount(
        <ComponentWithErrorBoundary />,
    );

    expect(component).toMatchSnapshot();
    console.error.restore();
    console.log.restore();
});
test('Default fallback error boundary', () => {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');

    const ComponentWithErrorBoundary = withErrorBoundary(SimpleComponent, {
        appName: 'FandomCreator',
        appVersion: 'v1',
        name: 'TestBoundaryName',
    });

    const component = mount(
        <ComponentWithErrorBoundary />,
    );

    expect(component).toMatchSnapshot();
    console.error.restore();
    console.log.restore();
});

test('Renders nothing when there is null fallback', () => {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');

    const ComponentWithErrorBoundary = withErrorBoundary(SimpleComponent, {
        fallbackComponent: null,
        name: 'TestBoundaryName',
    });

    const component = mount(
        <ComponentWithErrorBoundary />,
    );

    expect(component).toMatchSnapshot();
    console.error.restore();
    console.log.restore();
});

test('Can skip the log and can extract the name', () => {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');

    const ComponentWithErrorBoundary = withErrorBoundary(SimpleComponent, {
        skipLog: true,
    });

    const component = mount(
        <ComponentWithErrorBoundary />,
    );

    expect(component).toMatchSnapshot();
    console.error.restore();
    console.log.restore();
});
