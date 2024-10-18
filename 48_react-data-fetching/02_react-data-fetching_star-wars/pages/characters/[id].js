import useSWR from "swr";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

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

export default function Character() {
	const {
		query: { id },
	} = useRouter();

	const { data: character, error, isLoading } = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher);

	if (isLoading) return <h1>Loading...</h1>;
	if (error) return <h1>{error.message}</h1>;

	return (
		<Layout>
			<Card id={id} name={character.name} height={character.height} eyeColor={character.eye_color} birthYear={character.birth_year} />
		</Layout>
	);
}
