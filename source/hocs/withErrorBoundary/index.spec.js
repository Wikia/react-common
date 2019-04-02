import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import StyledErrorDisplayingContent from '../../components/StyledErrorDisplayingContent';

import withErrorBoundary from './index';

function ThrowingError() {
    throw new Error('test');
}
const ComponentWithError = () => <ThrowingError />;

// eslint-disable-next-line jest/no-hooks
beforeEach(() => {
    sinon.stub(console, 'error');
    sinon.stub(console, 'log');
});

// eslint-disable-next-line jest/no-hooks
afterEach(() => {
    console.error.restore();
    console.log.restore();
});

function mountWithErrorBoundary(Component, options = {}) {
    const ComponentWithErrorBoundary = withErrorBoundary(Component, options);
    return mount(<ComponentWithErrorBoundary />);
}

test('Can handle no options', () => {
    const ComponentWithErrorBoundary = withErrorBoundary(ComponentWithError);
    const component = mount(<ComponentWithErrorBoundary />);

    expect(component.html()).toBe(null);
});

describe('Should display error state', () => {
    test('Empty error state', () => {
        const component = mountWithErrorBoundary(ComponentWithError);

        expect(component.html()).toBe(null);
    });

    test('StyledErrorDisplayingContent error state', () => {
        const component = mountWithErrorBoundary(ComponentWithError, {
            fallback: StyledErrorDisplayingContent,
        });

        expect(component.find(StyledErrorDisplayingContent)).toHaveLength(1);
    });

    test('Should render custom fallback', () => {
        const CustomFallback = () => <div name="CustomFallback">Error :(</div>;

        const component = mountWithErrorBoundary(ComponentWithError, {
            fallback: CustomFallback,
        });

        expect(component.find(CustomFallback)).toHaveLength(1);
    });
});

test('Can skip the log and can extract the name', () => {
    const component = mountWithErrorBoundary(ComponentWithError, {
        skipLog: true,
    });

    expect(component).toMatchSnapshot();
});
