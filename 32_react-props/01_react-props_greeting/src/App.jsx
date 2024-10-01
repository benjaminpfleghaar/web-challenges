import "./styles.css";

export default function App() {
	return <Greeting name="Esraa" />;
}

function Greeting({ name }) {
	return <h1>Hello, {name === "Esraa" ? "Coach" : name}!</h1>;
}
