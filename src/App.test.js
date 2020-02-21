import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test("Returns a div", () => {
  const { queryByTestId } = render(<App />);
  // document.body.div = div;

  expect(queryByTestId(/app/i));

})
