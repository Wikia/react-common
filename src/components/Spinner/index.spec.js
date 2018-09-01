import React from 'react';
import renderer from 'react-test-renderer';

import Spinner from './index';

test('Spinner renders correctly with default values', () => {
    const component = renderer.create(
        <Spinner />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom size (string)', () => {
    const component = renderer.create(
        <Spinner size="78" stroke="6" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom size (number)', () => {
    const component = renderer.create(
        <Spinner size="20" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom colors (named color)', () => {
    const component = renderer.create(
        <Spinner color="red" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom colors (short hex)', () => {
    const component = renderer.create(
        <Spinner color="#0f0" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom colors (rgb)', () => {
    const component = renderer.create(
        <Spinner color="rgb(0,0,255)" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom inline ', () => {
    const component = renderer.create(
        <Spinner inline />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with custom block ', () => {
    const component = renderer.create(
        <Spinner block />
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('Spinner renders correctly with additional classname', () => {
    const component = renderer.create(
        <Spinner className="custom-class or-multiple-classes" />
    );
    expect(component.toJSON()).toMatchSnapshot();
});
