console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let result;

	// --v-- write your code here --v--

	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	switch (data.operator) {
		case "addition":
			result = add(Number(data.numberA), Number(data.numberB));
			break;
		case "subtraction":
			result = subtract(Number(data.numberA), Number(data.numberB));
			break;
		case "multiplication":
			result = multiply(Number(data.numberA), Number(data.numberB));
			break;
		case "division":
			result = divide(Number(data.numberA), Number(data.numberB));
			break;
	}

	// --^-- write your code here --^--

	resultOutput.textContent = result;
});
