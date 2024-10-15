import Link from "next/link";
import { volumes, introduction } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
	const router = useRouter();

	return (
		<>
			<h1>The Lord of the Rings</h1>
			<p>{introduction}</p>
			<ul>
				{volumes.map((volume) => (
					<li key={volume.slug}>
						<Link href={`/volumes/${volume.slug}`} title={volume.title}>
							{volume.title}
						</Link>
					</li>
				))}
			</ul>
			<button
				type="button"
				onClick={() => {
					const randomVolume = Math.floor(Math.random() * volumes.length);
					router.push(`/volumes/${volumes[randomVolume].slug}`);
				}}>
				Random volume
			</button>
		</>
	);
}
