import React from "react";
import "./styles.css";

export default function App() {
	function handleClick() {
		console.log("You clicked me!");
	}

	return (
		<>
			<Button color="red" text="My red Button" onButtonClick={handleClick} />
			<Button color="green" text="My green Button" disabled onButtonClick={handleClick} />
			<Button color="blue" text="My blue Button" onButtonClick={handleClick} />
		</>
	);
}

function Button({ color, text, disabled, onButtonClick }) {
	return (
		<button type="button" style={{ backgroundColor: color }} disabled={disabled} onClick={onButtonClick}>
			{text}
		</button>
	);
}
