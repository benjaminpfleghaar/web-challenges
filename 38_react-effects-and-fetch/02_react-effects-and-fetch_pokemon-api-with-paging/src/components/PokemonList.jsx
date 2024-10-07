import { useEffect, useState } from "react";

export default function PokemonList() {
	const [pokemon, setPokemon] = useState([]);
	const [url, setURL] = useState("https://pokeapi.co/api/v2/pokemon");
	const [prev, setPrev] = useState("");
	const [next, setNext] = useState("");

	useEffect(() => {
		async function loadPokemon() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setPokemon(data.results);
				setPrev(data.previous);
				setNext(data.next);
			} catch (error) {
				console.log(error);
			}
		}

		loadPokemon();
	}, [url]);

	function handlePreviousPage() {
		if (prev) setURL(prev);
	}

	function handleNextPage() {
		if (next) setURL(next);
	}

	return (
		<main>
			<button type="button" onClick={handlePreviousPage}>
				Previous Page
			</button>
			<button type="button" onClick={handleNextPage}>
				Next Page
			</button>
			<ul>
				{pokemon.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</main>
	);
}
