import React from 'react';
import { act } from 'react-dom/test-utils';
import sinon from 'sinon';

import StyledCountdown from './index';

jest.useFakeTimers();

test('StyledCountdown renders correctly', () => {
    const callback = sinon.spy();
    const component = mountWithThemeProvider(
        <StyledCountdown onTick={callback} />
    );
    expect(component).toMatchSnapshot();
});

describe('StyledCountdown calls callback 10 times with proper values', () => {
    const callback = sinon.spy();
    const component = mountWithThemeProvider(<StyledCountdown onTick={callback} />);

    for (let value = 9; value >= 0; value -= 1) {
        const index = 9 - value;
        test(`Callback #${index}`, () => {
            act(() => {
                jest.advanceTimersByTime(1000);
            });
            component.update();

            expect(callback.callCount).toEqual(index + 1);
            expect(callback.getCall(index).args[0]).toEqual(value);
            expect(component).toMatchSnapshot();
        });
    }
});


