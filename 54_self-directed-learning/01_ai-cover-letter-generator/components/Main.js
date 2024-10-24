"use client";

import useSWR from "swr";
import { useState } from "react";
import Form from "@/components/Form";
import Letter from "@/components/Letter";

export default function Main() {
	const [bio, setBio] = useState("");
	const [description, setDescription] = useState("");
	const [toggleFetch, setToggleFetch] = useState(false);
	const prompt = `Write a cover letter for me. Consider the following words about myself: ${bio}. And consider also this job description: ${description}.`;

	const fetcher = (url) =>
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(prompt),
		}).then((res) => res.json());

	const { data, isLoading, isValidating, mutate } = useSWR(toggleFetch ? "/api" : null, fetcher);

	return (
		<main>
			<h1 id="title">Cover Letter Generator</h1>
			<Letter data={data} isPending={isLoading || isValidating} />
			<Form bio={bio} setBio={setBio} description={description} setDescription={setDescription} setToggleFetch={setToggleFetch} onFetch={() => mutate()} />
		</main>
	);
}
