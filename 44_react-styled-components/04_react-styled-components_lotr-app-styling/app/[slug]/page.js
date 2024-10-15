import { volumes } from "@/libs/data";
import Books from "@/components/Books";
import Headline from "@/components/Headline";
import HomeLink from "@/components/HomeLink";
import Paragraph from "@/components/Paragraph";
import Pagination from "@/components/Pagination";

export function generateMetadata({ params }) {
	const volume = volumes.find(({ slug }) => slug === params.slug);

	return {
		title: volume.title,
	};
}

export default function Volume({ params }) {
	const volume = volumes.find(({ slug }) => slug === params.slug);
	const index = volumes.findIndex((volume) => volume.slug === params.slug);

	return (
		<>
			<HomeLink href="/" title="All Volumes">
				All Volumes
			</HomeLink>
			<Headline>{volume.title}</Headline>
			<Paragraph>{volume.description}</Paragraph>
			<Books volume={volume} />
			<Pagination volumes={volumes} index={index} />
		</>
	);
}
