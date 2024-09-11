console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "Hello World!";
const text =
	"Just joined this awesome bootcamp! Excited to connect with you all.";
let likes = 5;

const author = "John Doe";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(
	"Title: " +
		title +
		"\nContent: " +
		text +
		"\nLikes: " +
		likes +
		"\nAuthor: " +
		author +
		"\nReported? " +
		isReported
);

likes++;

console.log(
	"Title: " +
		title +
		"\nContent: " +
		text +
		"\nLikes: " +
		likes +
		"\nAuthor: " +
		author +
		"\nReported? " +
		isReported
);

// --^-- write your code here --^--
