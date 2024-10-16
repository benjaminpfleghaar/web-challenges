import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
	render(<Input labelText="label" name="name" placeholder="placeholder" />);

	const input = screen.getByLabelText(/label/i);
	expect(input).toBeInTheDocument();

	// expect(input).toHaveAttribute("name", /name/i); is not working
	expect(input.getAttribute("name")).toMatch(/name/i);
	expect(input.getAttribute("placeholder")).toMatch(/placeholder/i);
});

test("calls callback on every user input", async () => {
	const handleInput = jest.fn();

	const user = userEvent.setup();

	render(<Input labelText="label" name="name" onChange={handleInput} />);

	const input = screen.getByLabelText(/label/i);

	await user.type(input, "A");
	await user.type(input, "B");
	await user.type(input, "C");

	expect(handleInput).toHaveBeenCalledTimes(3);
});
