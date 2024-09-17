console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
	const newAlert = document.createElement("li");
	newAlert.innerHTML = "I'm a new toast message.";
	newAlert.classList.add("toast-container__message");
	toastContainer.append(newAlert);
});

clearButton.addEventListener("click", () => {
	toastContainer.innerHTML = "";
});
