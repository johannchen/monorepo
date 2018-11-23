import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

test('render layout', () => {
  const component = renderer.create(<Layout />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
