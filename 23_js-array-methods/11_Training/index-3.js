// 1. Convert an array of numbers to their squares
// Write a function that takes an array of numbers and returns an array where each number is squared.

const numbersArray = [1, 2, 3, 4, 5];

function squareNumbers(numbersArray) {
	// TODO:
	return numbersArray.map((number) => number * number);
}

// 2. Find the sum of all positive numbers in an array
// Write a function that returns the sum of all positive numbers in an array.

const mixedNumbers = [-10, 20, -30, 40, 50, -5];

function sumPositiveNumbers(mixedNumbers) {
	// TODO:
	let totalSum = 0;

	mixedNumbers.map((number) => {
		if (number > 0) totalSum += number;
	});

	return totalSum;
}

// 3. Count the occurrences of each letter in a string
// Write a function that returns an object where the keys are letters and the values are the number of times each letter occurs in the string.

const text = "javascript";

function countLetterOccurrences(text) {
	// TODO:
	let countedLetters = {};

	for (const letter of text) {
		if (!countedLetters[letter]) {
			countedLetters[letter] = 1;
		} else {
			countedLetters[letter] += 1;
		}
	}

	return countedLetters;
}

// 4. Check if a string is a valid email address
// Write a function that checks if a string is a valid email address using basic regex (e.g., contains "@" and ".").

const email = "example@domain.com";

function isValidEmail(email) {
	// TODO:

	return email.includes("@") && email.includes(".");
}

// 5. Find the second largest number in an array
// Write a function that returns the second largest number in an array of numbers.

const numArray2 = [12, 35, 1, 10, 34, 1];

function secondLargestNumber(numArray2) {
	// TODO:
	const sortedArray = numArray2.toSorted().toReversed();

	return sortedArray[1];
}

// 6. Rotate an array to the right by a given number of positions
// Write a function that rotates an array to the right by "n" positions.

const arrayToRotate = [1, 2, 3, 4, 5];
const positions = 2;

function rotateArrayRight(arrayToRotate, positions) {
	// TODO:
	if (positions > arrayToRotate.length) return "Array is to small";

	const partOne = arrayToRotate.slice(0, arrayToRotate.length - positions);
	const partTwo = arrayToRotate.slice(-positions);

	return [...partTwo, ...partOne];
}

// 7. Check if a number is a perfect square
// Write a function that checks if a number is a perfect square (e.g., 16 is a perfect square because 4 * 4 = 16).

const numberToCheck = 16;

function isPerfectSquare(numberToCheck) {
	// TODO:
	return Math.sqrt(numberToCheck) % 1 === 0 ? "perfect square" : "not so perfect";
}

// 8. Remove a specific element from an array
// Write a function that removes all instances of a specific element from an array.

const arrayWithElement = [1, 2, 3, 4, 2, 5, 2];
const elementToRemove = 2;

function removeElement(arrayWithElement, elementToRemove) {
	// TODO:
	return arrayWithElement.filter((element) => element !== elementToRemove);
}

// 9. Find the longest substring without repeating characters
// Write a function that returns the longest substring in a string without repeating characters.

const inputString = "abcabcbb"; // result: "abc"

function longestUniqueSubstring(inputString) {
	// TODO:
	let longestSubstring = "";
	let stringArray = [];
	let count = 0;

	for (const letter of inputString) {
		if (longestSubstring.includes(letter)) {
			stringArray.push(longestSubstring);
			longestSubstring = "";
		}
		longestSubstring += letter;
	}

	stringArray.push(longestSubstring);

	stringArray.map((string) => {
		if (string.length > count) {
			count = string.length;
			longestSubstring = string;
		}
	});

	return longestSubstring;
}

// 10. Generate a random hexadecimal color code
// Write a function that generates a random hexadecimal color code (e.g., #3e2f1b).

function generateHexColor() {
	// TODO:
}

console.log(generateHexColor());
