export default function Form({ bio, description, setBio, setDescription, setToggleFetch, onFetch }) {
	function handleSubmit(e) {
		e.preventDefault();
		setToggleFetch(true);
		onFetch();
	}

	return (
		<form aria-labelledby="title" onSubmit={handleSubmit}>
			<section>
				<label htmlFor="bio">Enter a few words about yourself</label>
				<textarea name="bio" id="bio" rows="3" required value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
			</section>
			<section>
				<label htmlFor="description">Enter a job description</label>
				<textarea name="description" id="description" rows="3" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
			</section>
			<button type="submit">Generate</button>
		</form>
	);
}
