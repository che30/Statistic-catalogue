import React from 'react';
import renderer from 'react-test-renderer';
import YearFilter from './YearFilter';

it('renders correctly', () => {
  const tree = renderer

    .create(<YearFilter />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});