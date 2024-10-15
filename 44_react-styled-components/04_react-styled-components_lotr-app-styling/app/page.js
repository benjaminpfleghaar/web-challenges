import Subline from "@/components/Subline";
import Volumes from "@/components/Volumes";
import Headline from "@/components/Headline";
import Paragraph from "@/components/Paragraph";
import { volumes, introduction } from "@/libs/data";

export default function Home() {
	return (
		<>
			<Headline>The Lord of the Rings</Headline>
			<Paragraph>{introduction}</Paragraph>
			<Subline>All Volumes</Subline>
			<Volumes volumes={volumes} />
		</>
	);
}
