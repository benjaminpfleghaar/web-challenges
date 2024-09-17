console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const formData = new FormData(form);
	const data = Object.fromEntries(formData);

	const ageBadnessSum = Number(event.target.elements.age.value) + Number(event.target.elements.badness.value);

	console.log(data);
	console.log("The age-badness-sum of " + event.target.elements.firstName.value + " is " + ageBadnessSum);

	event.target.elements.firstName.focus();
	event.target.reset();
});
