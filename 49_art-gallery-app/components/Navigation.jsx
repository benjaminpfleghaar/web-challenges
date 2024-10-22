import Link from "next/link";

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/" title="Pieces">
						Pieces
					</Link>
				</li>
				<li>
					<Link href="/spotlight" title="Spotlight">
						Spotlight
					</Link>
				</li>
				<li>
					<Link href="/favorites" title="Favorites">
						Favorites
					</Link>
				</li>
			</ul>
		</nav>
	);
}
