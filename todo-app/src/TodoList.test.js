import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "walk the dog") {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task }});
  const submitButton = todoList.getByText("New Todo");
  fireEvent.click(submitButton);
}

//smoke test
test('renders without crashing', function() {
    render(<TodoList />);
});
  
  //snapshot test
test("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
  
test("can add a todo", function() {
  const list = render(<TodoList />);
  addTodo(list);

  expect(list.getByLabelText("Task:")).toHaveValue("");
  expect(list.getByText("walk the dog")).toBeInTheDocument();
  expect(list.getByText("Edit")).toBeInTheDocument();
  expect(list.getByText("X")).toBeInTheDocument();
});

