import "./styles.css";

export default function App() {
	return <Article />;
}

function Article() {
	return (
		<article className="article">
			<h2 className="article__title">Hello world!</h2>
			<label htmlFor="firstname">Firstname</label>
			<input type="test" id="firstname" />
			<a href="#" className="article__link">
				My Link
			</a>
		</article>
	);
}
