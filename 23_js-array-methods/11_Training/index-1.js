// 1. Find the maximum of three numbers
const num1 = 25;
const num2 = 42;
const num3 = 17;

function maxOfThreeNumbers(num1, num2, num3) {
	// TODO:
	if (num1 > num2 && num1 > num3) return num1;
	if (num2 > num1 && num2 > num3) return num2;
	if (num3 > num1 && num3 > num2) return num3;

	// Solution
	// return Math.max(num1, num2, num3);
}

// 2. Reverse a string
const str = "JavaScript";

function reverseString(str) {
	// TODO:
	return [...str].toReversed().join("");

	// Solution
	// return str.split("").reverse().join("");
}

// 3. Check if a word is a palindrome
const word = "racecar";

function isPalindrome(word) {
	// TODO:
	const reversedWord = [...word].toReversed().join("");
	return word === reversedWord;

	// Solution
	// const reversedWord = word.split("").reverse().join("");
}

// 4. Flatten a nested array
const nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8]];

function flattenArray(nestedArray) {
	// TODO:
	return nestedArray.join(",").split(",");

	// Solution
	// return nestedArray.flat(Infinity);  // Flattens deeply nested arrays
}

// 5. Find the largest number in an array
const numbers = [15, 28, 43, 3, 99, 72];

function findLargestNumber(numbers) {
	// TODO:
	let largestNumber = 0;

	for (const number of numbers) {
		if (number > largestNumber) largestNumber = number;
	}

	// Solution
	// return Math.max(...numbers);

	return largestNumber;
}

// 6. Count the number of vowels in a string
const str2 = "JavaScript is amazing";

function countVowels(str2) {
	// TODO:
	const array = str2.split("");
	let vowels = {
		a: 0,
		e: 0,
		i: 0,
		o: 0,
		u: 0,
	};

	for (const letter of array) {
		for (const vowel in vowels) {
			if (letter === vowel) vowels[vowel] += 1;
		}
	}

	// Solution
	// const vowels = "aeiouAEIOU";
	// let count = 0;

	// for (let char of str2) {
	// 	if (vowels.includes(char)) {
	// 		count++;
	// 	}
	// }

	// return count;

	return vowels;
}

// 7. Remove duplicates from an array
const array = ["apple", "banana", "apple", "orange", "banana", "pear"];

function removeDuplicates(array) {
	// TODO:
	const newArray = [];

	for (const word of array) {
		!newArray.includes(word) && newArray.push(word);
	}

	return newArray;
}

// 8. Calculate the factorial of a number
const n = 5;

function factorial(n) {
	// TODO:
	let factorial = n;

	for (let i = 1; i < n; i++) {
		factorial *= i;
	}

	return factorial;
}

// 9. Check if all elements in an array are equal
const array2 = [7, 7, 7, 7, 7];

function areAllElementsEqual(array2) {
	// TODO:

	return array2.every((item) => item === array2[0]);
}

// 10. Convert an array of strings to uppercase
const strings = ["hello", "world", "javascript", "rocks"];

function convertToUppercase(strings) {
	// TODO:
	return strings.map((string) => string.toUpperCase());
}
