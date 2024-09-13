console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
	calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
	updatePizzaDisplay(pizza1, pizzaInput1.value);
	updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

pizzaInput2.addEventListener("input", () => {
	calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
	updatePizzaDisplay(pizza2, pizzaInput2.value);
	updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

// Task 1
// define the function calculatePizzaGain here

const calculatePizzaGain = (pizzaInput1, pizzaInput2) => {
	const areaPizza1 = pizzaInput1 * (2 * Math.PI);
	const areaPizza2 = pizzaInput2 * (2 * Math.PI);
	const gain = ((areaPizza2 - areaPizza1) / areaPizza1) * 100;

	output.textContent = Math.round(gain);
};

// Task 2
// define the function updatePizzaDisplay here

const updatePizzaDisplay = (pizza, size) => {
	const newSize = (size / 24) * 100;
	pizza.style.width = newSize + "px";
};

// Task 3
// define the function updateOutputColor here

const updateOutputColor = (pizzaInput1, pizzaInput2) => {
	const areaPizza1 = pizzaInput1 * (2 * Math.PI);
	const areaPizza2 = pizzaInput2 * (2 * Math.PI);
	const gain = ((areaPizza2 - areaPizza1) / areaPizza1) * 100;

	if (gain >= 0) {
		outputSection.style.background = "var(--green)";
	} else {
		outputSection.style.background = "var(--red)";
	}
};
