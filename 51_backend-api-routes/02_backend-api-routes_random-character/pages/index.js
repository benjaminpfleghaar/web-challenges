import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
	const { data, isLoading } = useSWR("/api/random-character", fetcher);

	if (isLoading) return <h1>loading...</h1>;
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
