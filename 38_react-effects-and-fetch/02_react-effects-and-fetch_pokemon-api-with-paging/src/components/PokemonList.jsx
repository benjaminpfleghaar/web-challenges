import { useEffect, useState } from "react";

export default function PokemonList() {
	const [pokemon, setPokemon] = useState({});
	const [url, setURL] = useState("https://pokeapi.co/api/v2/pokemon");

	useEffect(() => {
		async function loadPokemon() {
			try {
				const response = await fetch(url);
				const { next, previous, results } = await response.json();
				setPokemon({ next, previous, results });
			} catch (error) {
				console.log(error);
			}
		}

		loadPokemon();
	}, [url]);

	function handlePreviousPage() {
		if (pokemon.previous) setURL(pokemon.previous);
	}

	function handleNextPage() {
		if (pokemon.next) setURL(pokemon.next);
	}

	if (!pokemon.results) return <p>Loading...</p>;

	return (
		<main>
			<button type="button" onClick={handlePreviousPage}>
				Previous Page
			</button>
			<button type="button" onClick={handleNextPage}>
				Next Page
			</button>
			<ul>
				{pokemon.results.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</main>
	);
}
