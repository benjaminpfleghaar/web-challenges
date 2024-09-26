export function NavButton(direction, onClick) {
	const button = document.createElement("button");
	button.setAttribute("data-js", `button-${direction.toLowerCase()}`);
	button.classList.add("button", `button--${direction.toLowerCase()}`);
	button.textContent = direction;

	button.addEventListener("click", onClick);

	return button;
}
