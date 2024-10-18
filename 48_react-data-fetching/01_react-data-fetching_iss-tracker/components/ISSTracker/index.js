import useSWR from "swr";
import Map from "../Map/index";
import Controls from "../Controls/index";
// import { useEffect, useState } from "react";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function fetcher(url) {
	const response = await fetch(url);

	if (!response.ok) {
		const error = new Error("An error occurred while fetching the data.");
		error.info = await response.json();
		error.status = response.status;
		throw error;
	}

	return response.json();
}

export default function ISSTracker() {
	// const [coords, setCoords] = useState({
	// 	longitude: 0,
	// 	latitude: 0,
	// });

	// async function getISSCoords() {
	// 	try {
	// 		const response = await fetch(URL);
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setCoords({ longitude: data.longitude, latitude: data.latitude });
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		getISSCoords();
	// 	}, 5000);

	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, []);

	const { data: coords, error, isLoading, mutate } = useSWR(URL, fetcher, { refreshInterval: 5000 });

	if (isLoading) return <h1 style={{ color: "white" }}>Loading...</h1>;
	if (error) return <h1 style={{ color: "white" }}>{error.message}</h1>;

	return (
		<main>
			<Map longitude={coords.longitude} latitude={coords.latitude} />
			<Controls longitude={coords.longitude} latitude={coords.latitude} onRefresh={() => mutate()} />
		</main>
	);
}
