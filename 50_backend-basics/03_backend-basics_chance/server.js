import Chance from "chance";
import { createServer } from "node:http";

export const server = createServer((reuqest, response) => {
	const chance = new Chance();
	const name = chance.name();
	const age = chance.age();
	const profession = chance.profession({ rank: true });

	response.statusCode = 200;
	response.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`);
});
