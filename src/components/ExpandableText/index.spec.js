import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import ExpendableText from './index';

const shortText = 'Lorem ipsum';
const veryLongText = `Lorem ipsum dolor amet swag unicorn hammock neutra
narwhal salvia normcore PBR&B austin meh single-origin coffee cold-pressed
before they sold out. Kale chips truffaut heirloom, intelligentsia
shoreditch lomo irony affogato franzen vaporware blue bottle hella wolf.
Bushwick keffiyeh squid whatever ethical af tumeric glossier 3 wolf moon
copper mug offal deep v woke cold-pressed. Tilde live-edge jean shorts
portland beard knausgaard, butcher tote bag photo booth vape hexagon
shaman humblebrag lomo keffiyeh. Meditation offal mumblecore bushwick,
normcore cardigan kitsch fanny pack banh mi disrupt lo-fi.`.replace(/\n/mg, ' ');

test('ExpendableText renders correctly with default values', () => {
  const expandableText1 = renderer.create(
    <ExpendableText text={veryLongText} characterLimit={100} expandLabel={'EXPAND'} />,
  );
  expect(expandableText1.toJSON()).toMatchSnapshot();

  const expandableText2 = renderer.create(
    <ExpendableText text={shortText} characterLimit={100} expandLabel={'EXPAND'} />,
  );
  expect(expandableText2.toJSON()).toMatchSnapshot();
});

test('ExpendableText lifecycle works', () => {
  const expandableText = shallow(
    <ExpendableText text={veryLongText} characterLimit={100} expandLabel={'EXPAND'} />,
  );
  // trigger prop change
  expandableText.setProps({
    text: shortText,
  });
  expect(expandableText.text()).toEqual(shortText);
});

test('ExpendableText renders correctly with different params', () => {
  const expandableText1 = renderer.create(
    <ExpendableText text={veryLongText} characterLimit={5} expandLabel={'MORE'} />,
  );
  expect(expandableText1.toJSON()).toMatchSnapshot();

  const expandableText2 = renderer.create(
    <ExpendableText text={veryLongText} characterLimit={50} expandLabel={'MOREMORE'} />,
  );
  expect(expandableText2.toJSON()).toMatchSnapshot();

  const expandableText3 = renderer.create(
    <ExpendableText text={veryLongText} characterLimit={5000} expandLabel={'X'} />,
  );
  expect(expandableText3.toJSON()).toMatchSnapshot();
});

test('ExpendableText expands', () => {
  const expandableText = shallow(
    <ExpendableText text={veryLongText} characterLimit={50} expandLabel={'MORE'} />,
  );

  // trigger expand
  expandableText.find('button').simulate('click');
  expect(expandableText.text()).toEqual(veryLongText);
});
