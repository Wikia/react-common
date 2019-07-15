import React from 'react';

import StyledList from './index';

function getComponent(props = {}) {
    return mountWithThemeProvider(
        <StyledList {...props}>
            <li>First one</li>
            <li>Second one</li>
            <li>Third one</li>
        </StyledList>
    ).find(StyledList);
}

test('StyledList renders with children inside (default)', () => {
    expect(getComponent()).toMatchSnapshot();
});

test('StyledList renders with children inside (other styles)', () => {
    expect(getComponent({bigItems: true})).toMatchSnapshot();
    expect(getComponent({boldItems: true})).toMatchSnapshot();
    expect(getComponent({hasEllipsis: true})).toMatchSnapshot();
    expect(getComponent({isLinked: true})).toMatchSnapshot();
    expect(getComponent({linesBetween: true})).toMatchSnapshot();
});
