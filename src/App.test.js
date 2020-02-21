import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test("App has id", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId(/app/i));
});

test("App displays ContactForm", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId(/ContactForm/i));
});

test("App displays a div", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId(/div/i));
})

