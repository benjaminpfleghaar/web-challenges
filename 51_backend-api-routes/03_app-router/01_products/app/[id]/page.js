"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products({ params }) {
	const { data, isLoading } = useSWR(`/api/${params.id}`, fetcher);

	if (isLoading) return <h1>Loading...</h1>;
	if (!data) return null;

	if (data.status === "Product not found") return <h1>Product not found</h1>;

	return (
		<>
			<h1>{data.name}</h1>
			<section key={data.id}>
				<p>{data.description}</p>
				<ul>
					<li>
						<strong>Price: </strong>
						{data.price} {data.currency}
					</li>
					<li>
						<strong>Category: </strong>
						{data.category}
					</li>
				</ul>
			</section>
		</>
	);
}
