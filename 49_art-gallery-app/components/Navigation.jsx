import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
	return (
		<nav className={styles.navigation}>
			<ul className={styles.list}>
				<li>
					<Link href="/" title="Pieces" className={styles.link}>
						Pieces
					</Link>
				</li>
				<li>
					<Link href="/spotlight" title="Spotlight" className={styles.link}>
						Spotlight
					</Link>
				</li>
				<li>
					<Link href="/favorites" title="Favorites" className={styles.link}>
						Favorites
					</Link>
				</li>
			</ul>
		</nav>
	);
}
