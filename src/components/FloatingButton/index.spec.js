import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import FloatingButton from './index';

/* eslint-disable no-alert */

test('FloatingButton renders correctly with default values', () => {
  const component = renderer.create(
    <FloatingButton />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FloatingButton renders correctly with a label', () => {
  const component = renderer.create(
    <FloatingButton>AZ</FloatingButton>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FloatingButton renders correctly as link', () => {
  const component = renderer.create(
    <FloatingButton href="some link">AZ</FloatingButton>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FloatingButton renders correctly with a children', () => {
  /* eslint-disable max-len */
  const component = renderer.create(
    <FloatingButton>
      <svg id="wds-icons-trash-small" viewBox="0 0 18 18" width="100%" height="100%">
        <g fillRule="evenodd">
          <path d="M14 15H4V6h10v9zM6.875 3h4v1h-4V3zM16 4h-3.125V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2H2a1 1 0 0 0 0 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0 0-2z" />
          <path d="M7 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1" />
        </g>
      </svg>
    </FloatingButton>,
  );
  /* eslint-enable max-len */
  expect(component.toJSON()).toMatchSnapshot();
});

test('FloatingButton onClick is cliackable', () => {
  const wrapper = shallow(
    <FloatingButton>A</FloatingButton>
  );

  wrapper.find('button').simulate('click');

  expect(true).toBe(true);
});

test('FloatingButton triggers onClick event', () => {
  const mockOnClick = sinon.spy();
  const wrapper = shallow(
    <FloatingButton onClick={mockOnClick}>A</FloatingButton>
  );

  wrapper.find('button').simulate('click');

  expect(mockOnClick.calledOnce).toBe(true);
});
