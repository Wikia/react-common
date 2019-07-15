import React from 'react';

import StyledList from './index';

test('StyledList renders with children inside', () => {
    const component = mountWithThemeProvider(
        <StyledList>
            <li>First one</li>
            <li>Second one</li>
            <li>Third one</li>
        </StyledList>
    );
    expect(component).toMatchSnapshot();
});
