// Task:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const number = 8;

const checkNumber = (number) => {
	return number % 2 === 0 ? "Even" : "Odd";
};

console.log(checkNumber(number));
