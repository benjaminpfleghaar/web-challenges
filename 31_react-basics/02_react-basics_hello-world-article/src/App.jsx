import React from "react";
import "./styles.css";

export default function App() {
	return <HelloWorldArticle />;
}

function HelloWorldArticle() {
	return (
		<article>
			<h1>Hello world!</h1>
			<p>Lorem ipsum dolor sit amet consetetur</p>
		</article>
	);
}
