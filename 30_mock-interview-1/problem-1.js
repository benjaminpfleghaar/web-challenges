// Task:
// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.
// What if the string is empty? Then the result should be empty object literal, {}.

const word = "aabbbcccc";

const countCharacters = (word) => {
	const characterCount = {};

	[...word].map((character) => {
		if (characterCount[character]) {
			characterCount[character] += 1;
		} else {
			characterCount[character] = 1;
		}
	});

	return characterCount;
};

console.log(countCharacters(word));
