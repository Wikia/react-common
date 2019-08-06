import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import StyledArticleTag from './index';

/* eslint-disable no-alert */

test('StyledArticleTag renders correctly with default values', () => {
    const component = mountWithThemeProvider(
        <StyledArticleTag tag="foo" />,
    ).find(StyledArticleTag);

    expect(component).toMatchSnapshot();
});

test('StyledArticleTag renders correctly as secondary and removable', () => {
    const component = mountWithThemeProvider(
        <StyledArticleTag tag="foo" secondary removable />,
    ).find(StyledArticleTag);

    expect(component).toMatchSnapshot();
});

test('StyledArticleTag onClick is clickable', () => {
    const mockOnClick = sinon.spy();
    const wrapper = mountWithThemeProvider(
        <StyledArticleTag tag="foo" onClick={mockOnClick} />,
    ).find(StyledArticleTag);

    wrapper.find('span').simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
});

test('StyledArticleTag onRemove is clickable', () => {
    const onRemove = sinon.spy();
    const wrapper = mountWithThemeProvider(
        <StyledArticleTag tag="foo" onRemove={onRemove} removable />,
    ).find(StyledArticleTag);

    wrapper.find('StyledArticleTag__Icon').simulate('click');

    expect(onRemove.calledOnce).toBe(true);
});

// test('Button triggers onClick event', () => {
//     const mockOnClick = sinon.spy();
//     const wrapper = shallow(
//         <Button onClick={mockOnClick}>clickable</Button>
//     );

//     wrapper.find('button').simulate('click');

//     expect(mockOnClick.calledOnce).toBe(true);
// });

// test('Button renders correctly with custom types values', () => {
//     let component = renderer.create(
//         <Button disabled>disabled</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();

//     component = renderer.create(
//         <Button secondary>secondary</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();

//     component = renderer.create(
//         <Button secondary light>secondary light</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();

//     component = renderer.create(
//         <Button text>text</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();

//     component = renderer.create(
//         <Button text light>text light</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();

//     component = renderer.create(
//         <Button square>&hellip;</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();

//     component = renderer.create(
//         <Button className="custom-class">with custom class name</Button>,
//     );
//     expect(component.toJSON()).toMatchSnapshot();
// });
