// 1. Convert a string to an array of characters
// Write a function that takes a string and returns an array of its characters.

const str = "12345678";

function stringToArray(str) {
	// TODO:
	return str.split("");
}

// 2. Find the length of the longest word in an array
// Write a function that returns the length of the longest word in an array of strings.

const wordsArray = ["table", "chair", "microscope", "spectacular", "pen"];

function longestWordLength(wordsArray) {
	// TODO:
	let currentLength = "";

	for (const word of wordsArray) {
		if (word.length > currentLength.length) currentLength = word;
	}

	return currentLength.length;
}

// 3. Check if a string contains only digits
// Write a function that checks if a given string contains only numerical digits.

function isNumeric(str) {
	// TODO:
	const digits = "1234567890";

	return digits.includes(str);
}

// 4. Return the sum of all even numbers in an array
// Write a function that takes an array of numbers and returns the sum of all even numbers.

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(numArray) {
	// TODO:
	let totalSum = 0;

	for (const number of numArray) {
		if (number % 2 === 0) totalSum += number;
	}

	return totalSum;
}

// 5. Capitalize the first letter of each word in a string
// Write a function that capitalizes the first letter of each word in a given string.

const sentence = "javascript is awesome!";

function capitalizeFirstLetter(sentence) {
	// TODO:
	const arrayFromString = sentence.split(" "); // ["javascript", "is", "awesome!"]
	let finalSentence = "";

	for (const word of arrayFromString) {
		const arrayFromWord = word.split(""); // ["j", "a", "v", "a", ...]
		const firstLetter = arrayFromWord.splice(0, 1); // ["j"];
		const capitalLetter = firstLetter[0].toUpperCase(); // ["J"];
		const finalWord = [...capitalLetter, ...arrayFromWord]; // ["J", "a", "v", ...
		finalSentence += finalWord.join("") + " "; // Javascript
	}

	return finalSentence;
}

// 6. Remove falsy values from an array
// Write a function that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.

const mixedArray = [0, "hello", false, 42, "", null, "world", undefined, NaN];

function removeFalsyValues(mixedArray) {
	// TODO:
	const falsyValues = [false, 0, "", null, undefined, NaN];
	const mutatedArray = mixedArray.filter((entry) => !falsyValues.includes(entry));

	return mutatedArray;
}

// 7. Find the most frequent element in an array
// Write a function that returns the most frequent element in an array.

const elements = ["apple", 3, "apple", 3, 7, "apple", "banana", 7, "apple", 3];

function mostFrequentElement(elements) {
	// TODO:
	let count = 0;
	let countElements = {};
	let mostFrequentElement = "";

	elements.map((element) => {
		if (countElements[element]) {
			countElements[element] += 1;
		} else {
			countElements[element] = 1;
		}
	});

	for (const element in countElements) {
		if (countElements[element] > count) {
			count = countElements[element];
			mostFrequentElement = element;
		}
	}

	return mostFrequentElement;
}

// 8. Check if two strings are anagrams
// Write a function that checks if two given strings are anagrams (contain the same characters in a different order).

const string1 = "listen";
const string2 = "silent";

function areAnagrams(string1, string2) {
	// TODO:
	const string1Array = string1.split("");
	const areStringsTheSame = string1Array.every((letter) => string2.includes(letter));

	return areStringsTheSame;
}

// 9. Merge two sorted arrays into one sorted array
// Write a function that takes two sorted arrays and merges them into a single sorted array.

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];

function mergeSortedArrays(sortedArray1, sortedArray2) {
	// TODO:
	const newArray = [...sortedArray1, ...sortedArray2];
	const sortedArray = newArray.toSorted();

	return sortedArray;
}

// 10. Find the first non-repeated character in a string
// Write a function that returns the first character that does not repeat in a given string.

const str2 = "abacabad";

function firstNonRepeatedCharacter(str2) {
	// TODO:
	let countCharacters = {};

	for (const character of str2) {
		if (!countCharacters[character]) {
			countCharacters[character] = 1;
		} else {
			countCharacters[character] += 1;
		}
	}

	for (const item in countCharacters) {
		if (countCharacters[item] === 1) return item;
	}
}
