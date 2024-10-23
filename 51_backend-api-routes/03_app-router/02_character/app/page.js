"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Character() {
	const { data, isLoading } = useSWR("/api", fetcher);

	if (isLoading) return <h1>Loading...</h1>;
	if (!data) return null;

	return (
		<>
			<h1>{data.name}</h1>
			<ul>
				<li>
					<strong>Twitter: </strong>
					{data.twitter}
				</li>
				<li>
					<strong>Geo: </strong>
					{data.geo}
				</li>
			</ul>
		</>
	);
}
