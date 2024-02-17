import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";
//smoke test
test('renders without crashing', function() {
    render(<NewTodoForm />);
  });
  
  //snapshot test
  test("matches snapshot", function() {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("run the add function on form submit", function() {
    const addMock = jest.fn();
    const { getByText } = render(<NewTodoForm addTodo={addMock} />);
    const addButton = getByText("New Todo");
    fireEvent.click(addButton);
    expect(addMock).toHaveBeenCalled();

  });