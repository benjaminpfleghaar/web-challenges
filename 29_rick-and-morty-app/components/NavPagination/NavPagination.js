export function NavPagination(page, maxPage) {
	const navPagination = document.createElement("span");
	navPagination.classList.add("navigation__pagination");
	navPagination.setAttribute("data-js", "pagination");
	navPagination.textContent = `${page} / ${maxPage}`;

	return navPagination;
}
