import React from 'react';
import renderer from 'react-test-renderer';
import { components } from 'react-select';
import {
    mount,
} from 'enzyme';
import sinon from 'sinon';

import { DefaultDropdownIndicator } from './DropdownIndicator';

import Select from './index';

test('Select renders correctly', () => {
    let component = renderer.create(
        <Select
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <Select
            value={1}
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <Select
            value={[1, 3]}
            multi
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <Select
            value={4}
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(<Select options={[]} />);
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(<Select searchable={false} />);
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(<Select loading />);
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <DefaultDropdownIndicator
            cx={() => {}}
            getStyles={() => {}}
            isFocused
        />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Select onBlur functionality', () => {
    const onBlurSpy = sinon.spy();
    let wrapper = mount(
        <Select
            onBlur={onBlurSpy}
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );

    let stateManager = wrapper.find('StateManager').at(0);
    let input = wrapper.find('.fandom-select__input input').at(0);

    input.simulate('blur');
    expect(onBlurSpy.withArgs(null, null).calledOnce).toBe(true);

    stateManager.setState({ menuIsOpen: true });

    let option = wrapper.find(components.Option).at(1).get(0);
    option.props.innerProps.onClick();
    input.simulate('blur');
    expect(onBlurSpy.withArgs(2, 'label2').calledOnce).toBe(true);

    wrapper = mount(
        <Select
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );

    stateManager = wrapper.find('StateManager').at(0);
    input = wrapper.find('.fandom-select__input input').at(0);
    stateManager.setState({ menuIsOpen: true });
    option = wrapper.find(components.Option).at(1).get(0);
    option.props.innerProps.onClick();
    input.simulate('blur');
});

test('Multi-Select tests', () => {
    const onBlurSpy = sinon.spy();
    const wrapper = mount(
        <Select
            multi
            onBlur={onBlurSpy}
            options={[
                Select.createOption(1, 'label1'),
                Select.createOption(2, 'label2'),
                Select.createOption(3, 'label3'),
            ]}
        />
    );

    const stateManager = wrapper.find('StateManager').at(0);
    const input = wrapper.find('.fandom-select__input input').at(0);

    stateManager.setState({ menuIsOpen: true });
    const option1 = wrapper.find(components.Option).at(0).get(0);
    option1.props.innerProps.onClick();

    stateManager.setState({ menuIsOpen: false });
    input.simulate('blur');

    expect(onBlurSpy.withArgs([{ value: 1, label: 'label1' }]).calledOnce).toBe(true);

    stateManager.setState({ menuIsOpen: true });
    const option2 = wrapper.find(components.Option).at(0).get(0);
    option2.props.innerProps.onClick();
    stateManager.setState({ menuIsOpen: false });
    input.simulate('blur');
    expect(onBlurSpy.withArgs([{ value: 1, label: 'label1' }, { value: 2, label: 'label2' }]).calledOnce).toBe(true);
});

test('onNoOptions tests', () => {
    let wrapper = mount(
        <Select
            onNoOptions="☹️"
            options={[]}
        />
    );

    let stateManager = wrapper.find('StateManager').at(0);
    stateManager.setState({ menuIsOpen: true });
    const optionRenderer = wrapper.find('.fandom-select__menu-notice--no-options');
    expect(optionRenderer.text()).toEqual('☹️');

    const onNoOptionsSpy = sinon.spy();
    wrapper = mount(
        <Select
            onNoOptions={onNoOptionsSpy}
            options={[]}
        />
    );

    stateManager = wrapper.find('StateManager').at(0);
    stateManager.setState({ menuIsOpen: true });
    expect(onNoOptionsSpy.calledOnce).toBe(true);
});

test('onFocus tests', () => {
    const onFocusSpy = sinon.spy();
    let wrapper = mount(<Select onFocus={onFocusSpy} />);
    let input = wrapper.find('.fandom-select__input input').at(0);
    input.simulate('focus');

    expect(onFocusSpy.calledOnce).toBe(true);

    wrapper = mount(<Select />);
    input = wrapper.find('.fandom-select__input input').at(0);
    input.simulate('focus');
});

test('onTextInputChange tests', () => {
    const onTextInputChangeSpy = sinon.spy();
    const wrapper = mount(<Select onTextInputChange={onTextInputChangeSpy} />);
    const input = wrapper.find(components.Input).at(0).get(0);

    input.props.onChange({ currentTarget: { value: '😀' } });
    expect(onTextInputChangeSpy.withArgs('😀').calledOnce).toBe(true);
});

test('custom className is at root level', () => {
    const wrapper = mount(<Select className="custom-select" />);
    expect(wrapper.find('.fandom-select__wrapper.custom-select')).toHaveLength(1);
});
