import React from 'react';
import { shallow } from 'enzyme';

import HighlightedText from './index';

function expectRenderAsHtml(props, html) {
    const component = shallow(<HighlightedText {...props} />);
    expect(component.html()).toBe(`<span>${html}</span>`);
}

test('HighlightedText renders with highlight', () => {
    expectRenderAsHtml({ text: 'Invisibility', highlight: 'inv' }, '<mark>Inv</mark>isibility');
});

test('HighlightedText renders with highlight (2)', () => {
    expectRenderAsHtml({ text: 'Invisibilitinv', highlight: 'inv' }, '<mark>Inv</mark>isibilit<mark>inv</mark>');
});

test('HighlightedText renders without highlight (1)', () => {
    expectRenderAsHtml({ text: 'Invisibility', highlight: 'foo' }, 'Invisibility');
});

test('HighlightedText renders without highlight (2)', () => {
    expectRenderAsHtml({ text: 'Invisibility' }, 'Invisibility');
});
