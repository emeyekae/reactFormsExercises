import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

//smoke test
test('renders without crashing', function() {
  render(<Todo />);
});

//snapshot test
test("matches snapshot", function() {
  const {asFragment} = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

test("run delete function", function() {
    const removeMock = jest.fn();
    const { getByText } = render(<Todo remove={removeMock} />);
    const deleteButton = getByText("X");
    fireEvent.click(deleteButton);
    expect(removeMock).toHaveBeenCalled();
  });
  
  test("match snapshot while editing", function() {
    const { asFragment, getByText } = render(<Todo />);
    const editButton = getByText("Edit");
    fireEvent.click(editButton);
    expect(asFragment()).toMatchSnapshot();
  });


test("runs update on form submit", function() {
    const updateMock = jest.fn();
    const { getByText } = render(<Todo update={updateMock} />);
    const editButton = getByText("Edit");
    fireEvent.click(editButton);
    const updateButton = getByText("Update");
    fireEvent.click(updateButton);
    expect(updateMock).toHaveBeenCalled();
  });