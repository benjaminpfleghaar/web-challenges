console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const formSuccess = document.querySelector('[data-js="success"]');

function hideTosError() {
	tosError.setAttribute("hidden", "");
}

function showTosError() {
	tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
	if (event.target.checked) {
		tosError.setAttribute("hidden", "");
	} else {
		tosError.removeAttribute("hidden");
	}
});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	// --v-- write your code here --v--

	if (!event.target.elements.tos.checked) return;
	formSuccess.removeAttribute("hidden");
	// --^-- write your code here --^--

	// eslint-disable-next-line no-alert
	alert("Form submitted");
});
