import { NavButton } from "./components/NavButton/NavButton.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";
import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";

const navigation = document.querySelector('[data-js="navigation"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarError = document.querySelector('[data-js="search-bar-error"]');
const searchBarContainer = document.querySelector('[data-js="search-bar-container"]');

let page = 1;
let maxPage = 1;
let searchQuery = "";

const searchBar = SearchBar((event) => {
	event.preventDefault();
	page = 1;
	searchQuery = event.target.query.value;
	fetchCharacters();
});
const prevButton = NavButton("Prev", () => {
	if (page !== 1) {
		page--;
		fetchCharacters();
	}
});
const nextButton = NavButton("Next", () => {
	if (page !== maxPage) {
		page++;
		fetchCharacters();
	}
});

const fetchCharacters = async () => {
	const url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
	searchBarError.classList.add("search-bar__error-hidden");

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(response.status);
		const data = await response.json();
		cardContainer.innerHTML = "";
		data.results.forEach((character) => cardContainer.append(CharacterCard(character)));
		maxPage = data.info.pages;
		updateNavigation();
	} catch (error) {
		searchBarError.classList.remove("search-bar__error-hidden");
	}
};

const updateNavigation = () => {
	navigation.innerHTML = "";
	navigation.append(prevButton);
	navigation.append(NavPagination(page, maxPage));
	navigation.append(nextButton);
};

const init = () => {
	searchBarContainer.prepend(searchBar);
	updateNavigation();
	// fetchCharacters();
};

init();
