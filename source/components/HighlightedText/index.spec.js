import React from 'react';
import { shallow } from 'enzyme';

import HighlightedText from './index';

test('HighlightedText renders with highlight', () => {
    const component = shallow(<HighlightedText highlight="inv" text="Invisibility" />);

    expect(component).toMatchSnapshot();
});

test('HighlightedText renders without highlight (1)', () => {
    const component = shallow(<HighlightedText highlight="blah" text="Invisibility" />);

    expect(component).toMatchSnapshot();
});

test('HighlightedText renders without highlight (2)', () => {
    const component = shallow(<HighlightedText text="Invisibility" />);

    expect(component).toMatchSnapshot();
});
