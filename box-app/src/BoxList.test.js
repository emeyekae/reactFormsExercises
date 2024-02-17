import React from "react";
import { render, fireEvent, wait, screen } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(boxList, height = "200", width = "200", color = "steelblue") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box");
    fireEvent.click(button);
  }

//smoke test
test('renders without crashing', function() {
  render(<BoxList />);
});

//snapshot test
test("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test("add new box", function() {
    const boxList = render(<BoxList />);
  

    expect(boxList.queryByText("X")).not.toBeInTheDocument();
  
    addBox(boxList);
  
    // expect to see a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
      width: 200px;
      height: 200px;
      background-color: steelblue;
    `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
  });
  
  test("remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
  
    const removeButton = boxList.getByText("X");
  

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });
  