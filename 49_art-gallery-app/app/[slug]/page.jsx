import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function DetailsPage({ params }) {
	return <ArtPieceDetails slug={params.slug} />;
}
