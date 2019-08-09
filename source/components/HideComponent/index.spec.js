import React from 'react';
import { mount } from 'enzyme';

import HideComponent from './index';

describe('Check if show/hide logic works', () => {
    const testData = [
        { hide: undefined, show: undefined, result: true },
        { hide: undefined, show: true, result: true },
        { hide: undefined, show: false, result: false },
        { hide: true, show: undefined, result: false },
        { hide: true, show: true, result: false },
        { hide: true, show: false, result: false },
        { hide: false, show: undefined, result: true },
        { hide: false, show: true, result: true },
        { hide: false, show: false, result: true },
    ];

    testData.forEach((testSet) => {
        test(`Data set (hide: ${String(testSet.hide)}, show: ${String(testSet.show)}) => ${String(testSet.result)}`, () => {
            const component = mount(
                <HideComponent hide={testSet.hide} show={testSet.show}>test</HideComponent>
            );

            expect(component.text()).toBe(testSet.result ? 'test' : '');
        });
    });
});
