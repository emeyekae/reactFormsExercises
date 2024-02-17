import React from "react";
import { render, screen } from '@testing-library/react';
import Box from './Box';

//smoke test
test('renders without crashing', function() {
  render(<Box />);
});

//snapshot test
test("matches snapshot", function() {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});