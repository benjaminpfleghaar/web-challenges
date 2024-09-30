// Task:
// Our team's match results are recorded in a collection of strings.
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

const matches = ["3:1", "2:2", "0:1", "3:1", "2:2", "0:1", "3:1", "2:2", "0:1", "3:1"];

const countPoints = (matches) => {
	let totalScore = 0;

	for (const match of matches) {
		const splitMatch = match.split(":");
		const [ourScore, opponentScore] = splitMatch;

		if (ourScore > opponentScore) {
			totalScore += 3;
		} else if (ourScore === opponentScore) {
			totalScore += 1;
		}
	}

	return totalScore;
};

console.log(countPoints(matches));
