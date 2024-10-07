import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
	const [coords, setCoords] = useState({
		longitude: 0,
		latitude: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			getISSCoords();
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	async function getISSCoords() {
		const response = await fetch(URL);
		const { latitude, longitude } = await response.json();

		setCoords({ latitude, longitude });
	}

	return (
		<main>
			<Map longitude={coords.longitude} latitude={coords.latitude} />
			<Controls longitude={coords.longitude} latitude={coords.latitude} onRefresh={getISSCoords} />
		</main>
	);
}
