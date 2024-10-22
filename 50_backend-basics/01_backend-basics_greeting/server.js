import { createServer } from "node:http";

export const server = createServer((_, response) => {
	response.statusCode = 200;
	response.end("Hello John");
});
