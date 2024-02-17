import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

//smoke test
test('renders without crashing', function() {
    render(<NewBoxForm />);
  });
  
  //snapshot test
  test("matches snapshot", function() {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });
  