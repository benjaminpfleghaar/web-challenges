import { D6Button } from "./components/D6Button";
import useLocalStorageState from "use-local-storage-state";
import History from "./components/History";
import "./styles.css";

export default function App() {
	const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });

	return (
		<div className="app">
			<main className="app__main">
				<D6Button rolls={rolls} setRolls={setRolls} />
			</main>
			<aside className="app__aside">
				<History rolls={rolls} />
			</aside>
		</div>
	);
}
