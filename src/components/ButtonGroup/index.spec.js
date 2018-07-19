import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import ButtonGroup from './index';
import Button from '../Button';

test('ButtonGroup renders correctly', () => {
  const component = renderer.create(
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </ButtonGroup>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
