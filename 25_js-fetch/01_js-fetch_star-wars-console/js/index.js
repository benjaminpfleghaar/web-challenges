console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	console.log("R2-D2 eye color: " + data.results[2].eye_color);
}

fetchData(url);
