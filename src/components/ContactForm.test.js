import React from "react";
import { render, getByTestId, fireEvent, getByLabelText } from "@testing-library/react";
import ContactForm from './ContactForm';
import 'mutationobserver-shim';

const container = document.body;

test('ContactForm renders without crashing', () => {
    render(<ContactForm />);
});

test("First Name text renders", () => {
	const { getByText } = render(<ContactForm />);

	getByText(/first name/i);
});

test("Last Name text renders", () => {
    const { getByText } = render(<ContactForm />);

    getByText(/last name/i);
});

test("Placeholder text includes Bill", () => {
    const { queryAllByPlaceholderText } = render(<ContactForm />);

    queryAllByPlaceholderText(/bill/i);
});

test("Placeholder text is Luo", () => {
    const { getByPlaceholderText } = render(<ContactForm />);

    getByPlaceholderText(/luo/i);
});

// describe("All IDs are in place", () => {

// })

test("First name has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/firstName/i);
});

test("Last name has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/lastName/i);
});

test("Email has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/email/i);
});

test("Message has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/message/i);
})

test("Submit has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/submit/i);
})

// test("Submit button fires when clicked", () => {
//     const { getByTestId } = render(<ContactForm />);

//     fireEvent.click(getByTestId(/submit/i));

// })
