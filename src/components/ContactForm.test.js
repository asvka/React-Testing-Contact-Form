import React from "react";
import { render } from "@testing-library/react";
import ContactForm from './ContactForm';
import 'mutationobserver-shim';

test('ContactForm renders without crashing', () => {
    render(<ContactForm />);
});

test("First Name text is interactable", () => {
	const { getByText } = render(<ContactForm />);

	getByText(/first name/i);
});

test("Last Name is interactable", () => {
    const { getByText } = render(<ContactForm />);

    getByText(/last name/i);
});

test("Placeholder text is Luo", () => {
    const { getByPlaceholderText } = render(<ContactForm />);

    getByPlaceholderText(/luo/i);
})