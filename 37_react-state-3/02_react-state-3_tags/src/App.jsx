import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
	const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

	function handleDeleteTag(tagToDelete) {
		setTags(tags.filter((tag) => tag !== tagToDelete));
	}

	function handleAddTag(tagToAdd) {
		setTags([tagToAdd, ...tags]);
	}

	return (
		<main className="app">
			<Form onAddTag={handleAddTag} />
			<List onDeleteTag={handleDeleteTag} tags={tags} />
		</main>
	);
}
