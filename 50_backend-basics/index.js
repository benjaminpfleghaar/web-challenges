import { createServer } from "node:http";

const server = createServer((request, response) => {
	response.status = 200;
	response.end("Hello World");
});

server.listen(3000, () => {
	console.log("Listen to server on port 3000");
});
