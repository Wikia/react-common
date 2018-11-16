import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import DropdownIcon from './index';
import Icon from '../../../Icon';

/* eslint-disable no-alert */

test('DropdownIcon renders correctly with default values', () => {
    const component = renderer.create(
        <DropdownIcon>Content</DropdownIcon>
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('DropdownIcon renders proper icon if isLevel2 is set', () => {
    const wrapper = shallow(<DropdownIcon isLevel2={true} />);

    const icon = wrapper.find(Icon);

    expect(icon.length).toEqual(1);
    expect(icon.hasClass('wds-dropdown-chevron')).toEqual(true);
});

test('DropdownIcon renders proper icon if isLevel2 is not set', () => {
    const wrapper = shallow(<DropdownIcon isLevel2={false} />);

    const icon = wrapper.find(Icon);

    expect(icon.length).toEqual(1);
    expect(icon.hasClass('wds-dropdown__toggle-chevron')).toEqual(true);
});
