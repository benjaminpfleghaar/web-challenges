export default function Letter({ data, isPending }) {
	if (isPending) return <h2>Loading...</h2>;
	if (!data) return null;

	return (
		<>
			<h2>Your Cover Letter</h2>
			<p>{data.message}</p>
		</>
	);
}
