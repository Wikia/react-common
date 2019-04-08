import { mount } from 'enzyme';
import React from 'react';

import StyledErrorDisplayingContent from './index';

test('StyledErrorDisplayingContent renders', () => {
    const component = mount(
        <StyledErrorDisplayingContent />
    );
    expect(component).toMatchSnapshot();
});
