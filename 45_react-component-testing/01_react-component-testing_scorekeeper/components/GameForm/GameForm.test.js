import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
	useRouter() {
		return { push: jest.fn() };
	},
}));

test("renders two input fields and a button", () => {
	render(<GameForm />);

	const game = screen.getByLabelText("Name of game");
	expect(game).toBeInTheDocument();

	const player = screen.getByLabelText("Player names, separated by comma");
	expect(player).toBeInTheDocument();

	const button = screen.getByRole("button", { name: "Create game" });
	expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
	render(<GameForm />);

	const form = screen.getByRole("form", { name: "Create a new game" });
	expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
	const handleFormSubmit = jest.fn();

	const user = userEvent.setup();

	render(<GameForm onCreateGame={handleFormSubmit} />);

	const button = screen.getByRole("button", { name: "Create game" });
	const game = screen.getByLabelText("Name of game");
	const player = screen.getByLabelText("Player names, separated by comma");

	await user.type(game, "Game");
	await user.type(player, "Player");
	await user.click(button);

	const submittedDataObject = {
		nameOfGame: "Game",
		playerNames: ["Player"],
	};

	expect(handleFormSubmit).toHaveBeenCalledWith(submittedDataObject);
});

test("does not submit form if one input field is left empty", async () => {
	const handleFormSubmit = jest.fn();

	const user = userEvent.setup();

	render(<GameForm onCreateGame={handleFormSubmit} />);

	const button = screen.getByRole("button", { name: "Create game" });

	await user.click(button);

	expect(handleFormSubmit).not.toHaveBeenCalled();
});
